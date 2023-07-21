import {IGetWeatherByCityNameResponse} from '@api/types';

export type IGameStore = {
  loading: boolean;
  gameComplexity: IGameComplexity;
  setLoading: (loading: boolean) => void;
  setGameComplexity: (complexity: IGameComplexity) => void;

  currentRound: number;
  currentHelp: number | (() => number);
  onHelpUse: () => void;
  currentGameHistory: IRoundsHistory[];
  currentMistakes: number;
  currentRoundVariants: IGetWeatherByCityNameResponse[];
  currentCorrectAnswer: IGetWeatherByCityNameResponse | undefined;
  onMistake: () => void;
  setRound: (round: number) => void;
  onNextRound: () => void;
  getRandomCities: () => Promise<void>;
  saveProgressToHistory: () => void;
  restartGame: () => void;

  finishModalVisible: boolean;
  setFinishModalVisible: (visible: boolean) => void;
  isAnswerChosen: boolean;
  setIsAnswerChosen: (isAnswerChosen: boolean) => void;
  onAnswerChoose: (userAnswer: IGetWeatherByCityNameResponse) => void;
};

export type IGameState = {
  rounds: number;
  variants: number;
  mistakes: number;
};

export type IGameHistory = {
  id: string;
  date: string;
  game_won: boolean;
  difficulty: IGameComplexity;
  roundsHistory: IRoundsHistory[];
};

export type IRoundsHistory = {
  round: number;
  variants: IGetWeatherByCityNameResponse[];
  isCorrect: boolean;
  correctAnswer: IGetWeatherByCityNameResponse;
  userAnswer: IGetWeatherByCityNameResponse;
};

export type IGameComplexity = 'easy' | 'medium' | 'hard';
