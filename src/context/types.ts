import {IGetWeatherByCityNameResponse} from '@api/types';

export type IGameContext = {
  gameComplexity: IGameComplexity;
  currentRoundVariants: IGetWeatherByCityNameResponse[];
  setGameComplexity: (complexity: IGameComplexity) => void;
  getRandomCities: () => void;
};

export type IGameComplexity = 'easy' | 'medium' | 'hard';
