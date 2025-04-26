export type User = {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
};

export type Question = {
  id: string;
  text: string;
  options: string[];
  correctOption: number;
  explanation: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
  tags: string[];
};

export type TestAttempt = {
  id: string;
  userId: string;
  testId: string;
  startTime: string;
  endTime: string | null;
  score: number | null;
  isPassed: boolean | null;
  answers: {
    questionId: string;
    selectedOption: number | null;
    isCorrect: boolean | null;
  }[];
};

export type Test = {
  id: string;
  title: string;
  description: string;
  timeLimit: number | null; // in minutes, null means untimed
  passingScore: number;
  questionIds: string[];
  categories: string[];
  difficulty: "easy" | "medium" | "hard";
  isPublished: boolean;
  createdAt: string;
};

export type UserTestResult = {
  id: string;
  userId: string;
  testId: string;
  testTitle: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  timeSpent: number; // in seconds
  isPassed: boolean;
  completedAt: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
}; 