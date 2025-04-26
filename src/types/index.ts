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
