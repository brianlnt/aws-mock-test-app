import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MockDataService } from "../services/MockDataService";
import { Question, Test } from "../types";
import Button from "../components/ui/Button";

const SampleTest: React.FC = () => {
//   const navigate = useNavigate();
  
  const [test, setTest] = useState<Test | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  
  // Maximum number of questions for sample test
  const MAX_SAMPLE_QUESTIONS = 5;

  // Load a random test and limited questions
  useEffect(() => {
    const loadSampleTest = async () => {
      try {
        setIsLoading(true);
        
        // Get all tests
        const tests = await MockDataService.getTests();
        
        // Filter published tests
        const publishedTests = tests.filter(t => t.isPublished);
        
        if (publishedTests.length === 0) {
          setError("No tests available at the moment");
          return;
        }
        
        // Pick a random test (in a real app, you'd probably want to have a designated sample test)
        const randomTest = publishedTests[Math.floor(Math.random() * publishedTests.length)];
        
        // Get the full test with questions
        const testData = await MockDataService.getTestWithQuestions(randomTest.id);
        
        if (!testData) {
          setError("Sample test not available");
          return;
        }
        
        // Limit to MAX_SAMPLE_QUESTIONS
        const limitedQuestions = testData.questions
          .sort(() => Math.random() - 0.5) // Randomize
          .slice(0, MAX_SAMPLE_QUESTIONS);
        
        setTest(testData.test);
        setQuestions(limitedQuestions);
        setSelectedOptions(new Array(limitedQuestions.length).fill(null));
        
      } catch (err) {
        console.error("Error loading sample test:", err);
        setError("Failed to load sample test. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadSampleTest();
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

  const handleSubmitTest = () => {
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
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <h1 className="text-2xl font-bold text-center mb-6">Your Sample Test Results</h1>
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-primary-100 text-primary-800">
                  <span className="text-3xl font-bold">{score}%</span>
                </div>
                <p className="mt-4 text-lg">
                  You got <span className="font-semibold">{getAnsweredQuestionsCount()}</span> out of <span className="font-semibold">{questions.length}</span> questions correct.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h2 className="text-xl font-semibold">This was just a sample!</h2>
                <p>Sign up to access:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Full-length practice exams</li>
                  <li>Detailed explanations for all questions</li>
                  <li>Performance tracking and analytics</li>
                  <li>Personalized study recommendations</li>
                  <li>Access to all certification exam types</li>
                </ul>
              </div>
              
              <div className="flex flex-col space-y-4">
                <Link to="/register" className="w-full">
                  <Button fullWidth>Sign Up Now</Button>
                </Link>
                <Link to="/login" className="w-full">
                  <Button variant="outline" fullWidth>Already have an account? Log in</Button>
                </Link>
                <Link to="/" className="w-full">
                  <Button variant="ghost" fullWidth>Back to Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!test || questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-gray-600 text-xl font-medium mb-4">Sample test not available</div>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-secondary py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-primary text-xl font-bold">
              AWS Certification Mock Tests
            </Link>
            <div className="flex space-x-4">
              <Link to="/login">
                <Button variant="outline" className="text-white border-white hover:bg-secondary-600">
                  Log in
                </Button>
              </Link>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* Test header */}
          <div className="bg-secondary-500 text-white px-6 py-4">
            <h1 className="text-xl font-bold">{test.title} - Sample Test</h1>
            <p className="text-sm mt-1">
              {getQuestionProgress()} | 
              {getAnsweredQuestionsCount()} of {questions.length} answered
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

            {/* Sample test message */}
            <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 text-sm text-blue-700">
                  <p>
                    This is a sample test with {MAX_SAMPLE_QUESTIONS} questions. 
                    <Link to="/register" className="font-medium underline ml-1">
                      Sign up
                    </Link> for full access to all questions and detailed explanations.
                  </p>
                </div>
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
                <Button onClick={handleSubmitTest}>
                  Submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleTest; 