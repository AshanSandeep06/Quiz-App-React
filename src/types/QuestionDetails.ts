export type questionDetails = {
    id?: string;
    question: string;
    answers: string[];
    correctAnswer: string;
    correctAnswerIndex: number;
    submittedAnswer: string;
    submittedAnswerIndex: number;
    answerIsCorrect: boolean;
  };