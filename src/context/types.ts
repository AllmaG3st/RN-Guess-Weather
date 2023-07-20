import {IGetWeatherByCityNameResponse} from '@api/types';

export type IGameContext = {
  currentRound: number;
  setNextRound: () => void;
  setRound: (round: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  gameState: IGameState;
  isAnswerChosen: boolean;
  gameComplexity: IGameComplexity;
  currentMistakes: number;
  currentRoundVariants: IGetWeatherByCityNameResponse[];
  currentCorrectAnswer: IGetWeatherByCityNameResponse | undefined;
  setGameComplexity: (complexity: IGameComplexity) => void;
  toggleIsAnswerChosen: () => void;
  restartGame: () => void;
  onNextRound: () => void;
  onAnswerChoose: (answer: IGetWeatherByCityNameResponse) => void;
  getRandomCities: () => void;
};

export type IGameState = {
  rounds: number;
  variants: number;
  mistakes: number;
};

export type IGameHistory = {
  round: number;
  variants?: IGetWeatherByCityNameResponse[];
  correctAnswer: IGetWeatherByCityNameResponse;
  userAnswer: IGetWeatherByCityNameResponse;
};

export type IGameComplexity = 'easy' | 'medium' | 'hard';
