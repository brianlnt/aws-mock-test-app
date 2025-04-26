import React, { useState, useEffect } from "react";
import { MockDataService } from "../services/MockDataService";
import { Question } from "../types";
import Button from "../components/ui/Button";

const AwsQuiz: React.FC = () => {
  // State for quiz
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Number of questions to show
  const QUESTION_LIMIT = 5;

  // Load questions when component mounts
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        // Fetch all questions
        const allQuestions = await MockDataService.getQuestions();
        
        // Shuffle and select random questions
        const shuffledQuestions = [...allQuestions]
          .sort(() => Math.random() - 0.5)
          .slice(0, QUESTION_LIMIT);
        
        setQuestions(shuffledQuestions);
        setSelectedOptions(new Array(shuffledQuestions.length).fill(null));
      } catch (err) {
        console.error("Error loading questions:", err);
        setError("Failed to load questions. Please refresh the page.");
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const handleOptionSelect = (optionIndex: number) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
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

  const handleSubmit = () => {
    // Calculate score
    let correctAnswers = 0;
    
    for (let i = 0; i < questions.length; i++) {
      if (selectedOptions[i] === questions[i].correctOption) {
        correctAnswers++;
      }
    }
    
    const calculatedScore = Math.round((correctAnswers / questions.length) * 100);
    setScore(calculatedScore);
    setShowResults(true);
  };

  const handleRestartQuiz = () => {
    // Reset quiz state
    setCurrentQuestionIndex(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResults(false);
    setScore(0);
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
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h1 className="text-2xl font-bold text-center mb-6">Your Results</h1>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary-100 text-primary-800">
                  <span className="text-3xl font-bold">{score}%</span>
                </div>
                <p className="mt-4 text-lg">
                  You got <span className="font-semibold">
                    {questions.filter((_, i) => selectedOptions[i] === questions[i].correctOption).length}
                  </span> out of <span className="font-semibold">{questions.length}</span> questions correct.
                </p>
              </div>

              {/* Results details */}
              <div className="space-y-6 mt-8">
                <h2 className="text-xl font-semibold">Question Review</h2>
                
                {questions.map((question, index) => (
                  <div key={question.id} className="border rounded-lg p-4">
                    <p className="font-semibold text-gray-800">
                      Question {index + 1}: {question.text}
                    </p>
                    
                    <div className="mt-2 space-y-2">
                      {question.options.map((option, optIdx) => (
                        <div 
                          key={optIdx}
                          className={`p-2 rounded ${
                            optIdx === question.correctOption
                              ? "bg-green-100 border border-green-300"
                              : optIdx === selectedOptions[index] && optIdx !== question.correctOption
                                ? "bg-red-100 border border-red-300"
                                : "bg-gray-50 border border-gray-200"
                          }`}
                        >
                          {option}
                          {optIdx === question.correctOption && (
                            <span className="ml-2 text-green-600 font-medium">(Correct)</span>
                          )}
                          {optIdx === selectedOptions[index] && optIdx !== question.correctOption && (
                            <span className="ml-2 text-red-600 font-medium">(Your Answer)</span>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-3 text-sm text-gray-600">
                      <strong>Explanation:</strong> {question.explanation}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button onClick={handleRestartQuiz}>Take Quiz Again</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-gray-600 text-xl font-medium mb-4">No questions available</div>
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const answeredQuestionsCount = selectedOptions.filter(opt => opt !== null).length;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Quiz header */}
          <div className="bg-secondary text-white px-6 py-4">
            <h1 className="text-xl font-bold">AWS Certified Developer Associate Exam</h1>
            <p className="text-sm mt-1">
              Question {currentQuestionIndex + 1} of {questions.length} | 
              {answeredQuestionsCount} of {questions.length} answered
            </p>
          </div>

          {/* Question */}
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                {currentQuestion.text}
              </h2>
              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => (
                  <label
                    key={idx}
                    className={`flex items-start p-4 border rounded-md cursor-pointer transition-colors ${
                      selectedOptions[currentQuestionIndex] === idx
                        ? "bg-primary-50 border-primary"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      className="h-5 w-5 text-primary mt-0.5"
                      checked={selectedOptions[currentQuestionIndex] === idx}
                      onChange={() => handleOptionSelect(idx)}
                    />
                    <span className="ml-3">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between">
              <Button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                variant="outline"
              >
                Previous
              </Button>
              
              {currentQuestionIndex < questions.length - 1 ? (
                <Button onClick={handleNextQuestion}>
                  Next
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  disabled={answeredQuestionsCount < questions.length}
                >
                  Submit
                </Button>
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ width: `${(answeredQuestionsCount / questions.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-right">
                {answeredQuestionsCount} of {questions.length} questions answered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwsQuiz; 