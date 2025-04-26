import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MockDataService } from "../../services/MockDataService";
import { Question, Test, TestAttempt } from "../../types";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";

interface TestTakerProps {
  testId: string;
}

const TestTaker: React.FC<TestTakerProps> = ({ testId }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [test, setTest] = useState<Test | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>([]);
  const [testAttempt, setTestAttempt] = useState<TestAttempt | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load test and questions
  useEffect(() => {
    const loadTest = async () => {
      try {
        setIsLoading(true);
        const testData = await MockDataService.getTestWithQuestions(testId);
        
        if (!testData) {
          setError("Test not found");
          return;
        }
        
        setTest(testData.test);
        
        // Randomize question order for the test
        const shuffledQuestions = [...testData.questions]
          .sort(() => Math.random() - 0.5);
        
        setQuestions(shuffledQuestions);
        setSelectedOptions(new Array(shuffledQuestions.length).fill(null));
        
        // Start test attempt
        if (user) {
          const attempt = await MockDataService.startTestAttempt(user.id, testId);
          setTestAttempt(attempt);
          
          // Set time limit
          if (testData.test.timeLimit) {
            setTimeRemaining(testData.test.timeLimit * 60); // convert to seconds
          }
        }
      } catch (err) {
        console.error("Error loading test:", err);
        setError("Failed to load test. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadTest();
  }, [testId, user]);

  // Timer countdown
  useEffect(() => {
    if (timeRemaining === null || timeRemaining <= 0) return;
    
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev === null || prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeRemaining]);

  // Define handleSubmitTest with useCallback before the useEffect
  const handleSubmitTest = useCallback(async () => {
    if (!testAttempt || !user) return;
    
    try {
      setIsSubmitting(true);
      
      // Submit all remaining answers
      for (let i = 0; i < questions.length; i++) {
        if (selectedOptions[i] !== null) {
          // Use direct API call instead of saveAnswer function to avoid dependency cycle
          const question = questions[i];
          await MockDataService.saveAnswer(
            testAttempt.id,
            question.id,
            selectedOptions[i]
          );
        }
      }
      
      // Complete the test attempt
      const result = await MockDataService.completeTestAttempt(testAttempt.id);
      
      if (result) {
        navigate(`/results/${result.id}`);
      } else {
        setError("Failed to submit test. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Error submitting test:", err);
      setError("Failed to submit test. Please try again.");
      setIsSubmitting(false);
    }
  }, [testAttempt, user, questions, selectedOptions, navigate, setIsSubmitting, setError]);

  // Auto-submit when time is up
  useEffect(() => {
    if (timeRemaining === 0) {
      handleSubmitTest();
    }
  }, [timeRemaining, handleSubmitTest]);

  const saveAnswer = useCallback(async (questionIndex: number, optionIndex: number | null) => {
    if (!testAttempt || !user) return;
    
    try {
      const question = questions[questionIndex];
      await MockDataService.saveAnswer(
        testAttempt.id,
        question.id,
        optionIndex
      );
    } catch (err) {
      console.error("Error saving answer:", err);
    }
  }, [testAttempt, questions, user]);

  const handleOptionSelect = (optionIndex: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
    
    // Save the answer
    saveAnswer(currentQuestionIndex, optionIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getQuestionProgress = (): string => {
    return `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  };

  const getAnsweredQuestionsCount = (): number => {
    return selectedOptions.filter(option => option !== null).length;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-red-600 text-xl font-medium mb-4">{error}</div>
        <Button onClick={() => navigate('/tests')}>Back to Tests</Button>
      </div>
    );
  }

  if (!test || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-gray-600 text-xl font-medium mb-4">Test not found or has no questions</div>
        <Button onClick={() => navigate('/tests')}>Back to Tests</Button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow rounded-lg mb-6 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">{test.title}</h1>
              <p className="text-sm text-gray-500 mt-1">{test.description}</p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              {timeRemaining !== null && (
                <div className={`text-lg font-semibold ${timeRemaining < 60 ? 'text-red-600' : 'text-gray-700'}`}>
                  Time Remaining: {formatTime(timeRemaining)}
                </div>
              )}
              <div className="text-sm text-gray-500 mt-1">
                {getAnsweredQuestionsCount()} of {questions.length} questions answered
              </div>
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-white shadow rounded-lg mb-6 overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="font-medium text-sm text-gray-500">
                {getQuestionProgress()}
              </div>
              <div className="text-sm font-medium text-gray-500">
                {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
              </div>
            </div>
            
            <h2 className="text-lg font-medium text-gray-900 mb-6">{currentQuestion.text}</h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => (
                <div
                  key={idx}
                  className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                    selectedOptions[currentQuestionIndex] === idx
                      ? "bg-primary-50 border-primary"
                      : "hover:bg-gray-50 border-gray-300"
                  }`}
                  onClick={() => handleOptionSelect(idx)}
                >
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="radio"
                        className="h-4 w-4 text-primary focus:ring-primary-500 border-gray-300"
                        checked={selectedOptions[currentQuestionIndex] === idx}
                        onChange={() => handleOptionSelect(idx)}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="font-medium text-gray-700">
                        {option}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-between">
            <Button
              variant="outline"
              onClick={handlePrevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {currentQuestionIndex === questions.length - 1 ? (
                <Button
                  variant="primary"
                  onClick={handleSubmitTest}
                  isLoading={isSubmitting}
                >
                  Submit Test
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleNextQuestion}
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Question Navigator */}
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <h3 className="text-base font-medium text-gray-900 mb-4">Question Navigator</h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`h-10 w-10 flex items-center justify-center rounded-md font-medium text-sm
                  ${idx === currentQuestionIndex
                    ? "bg-primary text-white"
                    : selectedOptions[idx] !== null
                      ? "bg-primary-100 text-primary-700 border border-primary-300"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <Button
              variant="secondary"
              onClick={handleSubmitTest}
              isLoading={isSubmitting}
            >
              Submit Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestTaker; 