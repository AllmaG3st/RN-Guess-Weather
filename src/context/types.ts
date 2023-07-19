import {IGetWeatherByCityNameResponse} from '@api/types';

export type IGameContext = {
  currentRound: number;
  loading: boolean;
  gameState: IGameState;
  gameComplexity: IGameComplexity;
  currentRoundVariants: IGetWeatherByCityNameResponse[];
  currentCorrectAnswer: IGetWeatherByCityNameResponse | undefined;
  setGameComplexity: (complexity: IGameComplexity) => void;
  restartGame: () => void;
  onNextRound: () => void;
  getRandomCities: () => void;
};

export type IGameState = {
  rounds: number;
  variants: number;
};

export type IGameHistory = {
  variants: IGetWeatherByCityNameResponse[];
  userAnswer: IGetWeatherByCityNameResponse;
};

export type IGameComplexity = 'easy' | 'medium' | 'hard';
