export interface QuizQuestion {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ExtendedQuizQuestion extends QuizQuestion {
  answers: string[];
  answered: string;
  value: boolean | null;
}