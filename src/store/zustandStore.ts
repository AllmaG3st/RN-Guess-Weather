import {create} from 'zustand';

import {IGameStore} from './types';
import cities from '../data/cityNames.json';
import {CITIES_LENGTH, GAME_STATE} from './data';

import {navigationRef} from '@navigation';
import {IGameComplexity} from '@context/types';
import {getSeveralCitiesWeather} from '@api/weather';
import {IGetWeatherByCityNameResponse} from '@api/types';

const useGameStore = create<IGameStore>()((set, get) => ({
  loading: false,
  gameComplexity: 'easy',
  setLoading: (loading: boolean) => set({loading}),
  setGameComplexity: (complexity: IGameComplexity) =>
    set({gameComplexity: complexity}),

  currentRound: 1,
  currentGameHistory: [],
  currentMistakes: GAME_STATE.easy.mistakes,
  currentRoundVariants: [],
  currentCorrectAnswer: undefined,
  setRound: (round: number) => set({currentRound: round}),
  onNextRound: () => set({currentRound: get().currentRound + 1}),
  getRandomCities: async () => {
    get().setLoading(true);

    try {
      const {variants} = GAME_STATE[get().gameComplexity];

      const randomCities: string[] = [];

      while (randomCities.length < variants) {
        const randomIndex = Math.floor(Math.random() * CITIES_LENGTH);

        if (!randomCities.includes(cities[randomIndex])) {
          randomCities.push(cities[randomIndex]);
        }
      }

      const citiesWeather = await getSeveralCitiesWeather(randomCities);

      const correctAnswer = citiesWeather.reduce((prev, current) =>
        prev.temperature > current.temperature ? prev : current,
      );

      set({
        currentRoundVariants: citiesWeather,
        currentCorrectAnswer: correctAnswer,
      });
    } catch (error) {
      console.warn('Error while fetching cities weather', error);
    } finally {
      // Response is too fast and loader is not shown correctly
      setTimeout(() => get().setLoading(false), 700);
    }
  },
  restartGame: () => {
    navigationRef.reset({
      index: 1,
      routes: [{name: 'HomeScreen'}],
    });

    set({
      currentRound: 1,
      currentGameHistory: [],
      currentMistakes: GAME_STATE.easy.mistakes,
      currentRoundVariants: [],
      currentCorrectAnswer: undefined,
      isAnswerChosen: false,
    });
  },

  isAnswerChosen: false,
  onAnswerChoose: (userAnswer: IGetWeatherByCityNameResponse) => {
    set({
      currentGameHistory: [
        ...get().currentGameHistory,
        {
          round: get().currentRound,
          userAnswer,
          correctAnswer: get()
            .currentCorrectAnswer as IGetWeatherByCityNameResponse,
        },
      ],
    });
  },
  setIsAnswerChosen: (param: boolean) => set({isAnswerChosen: param}),
}));

export default useGameStore;
