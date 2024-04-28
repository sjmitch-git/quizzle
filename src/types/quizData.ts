export type QuizData = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
  answered: string | null;
  value: number | null;
};