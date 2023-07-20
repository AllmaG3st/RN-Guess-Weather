import {IGetWeatherByCityNameResponse} from '@api/types';
import {IGameComplexity, IGameHistory} from '@context/types';

export type IGameStore = {
  loading: boolean;
  gameComplexity: IGameComplexity;
  setLoading: (loading: boolean) => void;
  setGameComplexity: (complexity: IGameComplexity) => void;

  currentRound: number;
  currentGameHistory: IGameHistory[];
  currentMistakes: number;
  currentRoundVariants: IGetWeatherByCityNameResponse[];
  currentCorrectAnswer: IGetWeatherByCityNameResponse | undefined;
  onMistake: () => void;
  setRound: (round: number) => void;
  onNextRound: () => void;
  getRandomCities: () => Promise<void>;
  restartGame: () => void;

  finishModalVisible: boolean;
  setFinishModalVisible: (visible: boolean) => void;
  isAnswerChosen: boolean;
  setIsAnswerChosen: (isAnswerChosen: boolean) => void;
  onAnswerChoose: (userAnswer: IGetWeatherByCityNameResponse) => void;
};
