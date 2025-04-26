import { questions } from "../data/mockData";
import { Question } from "../types";

// Utility to wait to simulate API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockDataService {
  // Questions
  static async getQuestions(): Promise<Question[]> {
    await delay(800);
    return [...questions];
  }
} 