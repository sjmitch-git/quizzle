'use client'

import { createContext, useState } from "react";

import { TriviaParams } from "@/types/triviaParams";
import { ExtendedQuizQuestion } from "@/types/quizQuestion";

import { DEFAULT_AMOUNT, DEFAULT_CATEGORY, DEFAULT_CATEGORY_NAME, DEFAULT_DIFFICULTY, DEFAULT_TYPE } from '@/utils/constants'

export interface TriviaContextProps {
  triviaParams: TriviaParams;
  updateTriviaParams: (newParams: TriviaParams) => void;
  triviaQuestions: ExtendedQuizQuestion[];
  updateTriviaQuestions: (newQuestions: ExtendedQuizQuestion[]) => void;
}

const TriviaContext = createContext<TriviaContextProps | undefined>(undefined);

interface TriviaProviderProps {
  children: React.ReactNode;
  initialTriviaParams?: TriviaParams;
}

const TriviaProvider = ({ children }: TriviaProviderProps) => {
  const [triviaParams, setTriviaParams] = useState({
    amount: DEFAULT_AMOUNT,
    type: DEFAULT_TYPE,
    difficulty: DEFAULT_DIFFICULTY,
    category: DEFAULT_CATEGORY,
    categoryName: DEFAULT_CATEGORY_NAME,
  });

  const [triviaQuestions, setTriviaQuestions] = useState<
    ExtendedQuizQuestion[]
  >([]);

  const updateTriviaParams = (newParams: TriviaParams) => {
    setTriviaParams((prevParams) => ({ ...prevParams, ...newParams }));
  };

  const updateTriviaQuestions = (newQuestions: ExtendedQuizQuestion[]) => {
    setTriviaQuestions(newQuestions);
  };

  const contextValue: TriviaContextProps = {
    triviaParams,
    updateTriviaParams,
    triviaQuestions,
    updateTriviaQuestions,
  };

  return (
    <TriviaContext.Provider value={contextValue}>
      {children}
    </TriviaContext.Provider>
  );
};

export { TriviaProvider, TriviaContext };