import { questions, tests, categories } from "../data/mockData";
import { Question, Test, Category, TestAttempt, UserTestResult } from "../types";

// Utility to wait to simulate API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockDataService {
  // Questions
  static async getQuestions(): Promise<Question[]> {
    await delay(800);
    return [...questions];
  }

  static async getQuestionById(id: string): Promise<Question | null> {
    await delay(500);
    return questions.find((q) => q.id === id) || null;
  }

  static async getQuestionsByIds(ids: string[]): Promise<Question[]> {
    await delay(800);
    return questions.filter((q) => ids.includes(q.id));
  }

  static async getQuestionsByCategory(categoryId: string): Promise<Question[]> {
    await delay(800);
    return questions.filter((q) => q.category === categoryId);
  }

  // Tests
  static async getTests(): Promise<Test[]> {
    await delay(800);
    return [...tests];
  }

  static async getTestById(id: string): Promise<Test | null> {
    await delay(500);
    return tests.find((t) => t.id === id) || null;
  }

  static async getTestWithQuestions(testId: string): Promise<{ test: Test; questions: Question[] } | null> {
    await delay(1000);
    const test = tests.find((t) => t.id === testId);
    if (!test) return null;
    
    const testQuestions = questions.filter((q) => test.questionIds.includes(q.id));
    return { test, questions: testQuestions };
  }

  // Categories
  static async getCategories(): Promise<Category[]> {
    await delay(500);
    return [...categories];
  }

  static async getCategoryById(id: string): Promise<Category | null> {
    await delay(300);
    return categories.find((c) => c.id === id) || null;
  }

  // Test attempts
  private static testAttempts: TestAttempt[] = [];
  private static testResults: UserTestResult[] = [];

  static async startTestAttempt(userId: string, testId: string): Promise<TestAttempt> {
    await delay(500);
    
    const newAttempt: TestAttempt = {
      id: `attempt-${Math.random().toString(36).substring(2, 9)}`,
      userId,
      testId,
      startTime: new Date().toISOString(),
      endTime: null,
      score: null,
      isPassed: null,
      answers: [],
    };
    
    this.testAttempts.push(newAttempt);
    return newAttempt;
  }

  static async saveAnswer(
    attemptId: string, 
    questionId: string, 
    selectedOption: number | null
  ): Promise<TestAttempt | null> {
    await delay(300);
    
    const attemptIndex = this.testAttempts.findIndex((a) => a.id === attemptId);
    if (attemptIndex === -1) return null;
    
    const question = questions.find((q) => q.id === questionId);
    if (!question) return null;
    
    const attempt = this.testAttempts[attemptIndex];
    const answerIndex = attempt.answers.findIndex((a) => a.questionId === questionId);
    
    const isCorrect = selectedOption !== null ? selectedOption === question.correctOption : null;
    
    if (answerIndex !== -1) {
      // Update existing answer
      attempt.answers[answerIndex] = {
        questionId,
        selectedOption,
        isCorrect,
      };
    } else {
      // Add new answer
      attempt.answers.push({
        questionId,
        selectedOption,
        isCorrect,
      });
    }
    
    this.testAttempts[attemptIndex] = attempt;
    return attempt;
  }

  static async completeTestAttempt(attemptId: string): Promise<UserTestResult | null> {
    await delay(1000);
    
    const attemptIndex = this.testAttempts.findIndex((a) => a.id === attemptId);
    if (attemptIndex === -1) return null;
    
    const attempt = this.testAttempts[attemptIndex];
    const test = tests.find((t) => t.id === attempt.testId);
    if (!test) return null;
    
    // Calculate score
    const totalQuestions = test.questionIds.length;
    // const totalAnswered = attempt.answers.filter((a) => a.selectedOption !== null).length;
    const correctAnswers = attempt.answers.filter((a) => a.isCorrect).length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const isPassed = score >= test.passingScore;
    
    // Update attempt
    attempt.endTime = new Date().toISOString();
    attempt.score = score;
    attempt.isPassed = isPassed;
    this.testAttempts[attemptIndex] = attempt;
    
    // Calculate time spent
    const startTime = new Date(attempt.startTime).getTime();
    const endTime = new Date(attempt.endTime).getTime();
    const timeSpent = Math.round((endTime - startTime) / 1000); // in seconds
    
    // Create result
    const result: UserTestResult = {
      id: `result-${Math.random().toString(36).substring(2, 9)}`,
      userId: attempt.userId,
      testId: test.id,
      testTitle: test.title,
      score,
      totalQuestions,
      correctAnswers,
      timeSpent,
      isPassed,
      completedAt: attempt.endTime,
    };
    
    this.testResults.push(result);
    return result;
  }

  static async getUserTestResults(userId: string): Promise<UserTestResult[]> {
    await delay(800);
    return this.testResults.filter((r) => r.userId === userId);
  }

  static async getTestResult(resultId: string): Promise<UserTestResult | null> {
    await delay(500);
    return this.testResults.find((r) => r.id === resultId) || null;
  }
} 