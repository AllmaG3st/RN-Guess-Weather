import uuid from 'react-native-uuid';
import {create} from 'zustand';

import {IGameComplexity, IGameStore} from './types';
import cities from '../data/cityNames.json';
import {CITIES_LENGTH, GAME_STATE} from './data';

import {navigationRef} from '@navigation';
import {getSeveralCitiesWeather} from '@api/weather';
import {IGetWeatherByCityNameResponse} from '@api/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGameStore = create<IGameStore>((set, get) => ({
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
  onMistake: () => set({currentMistakes: get().currentMistakes - 1}),
  setRound: (round: number) => set({currentRound: round}),
  onNextRound: () => {
    if (get().currentRound === GAME_STATE[get().gameComplexity].rounds) {
      get().setFinishModalVisible(true);
      return;
    }

    set({
      currentRound: Math.min(
        get().currentRound + 1,
        GAME_STATE[get().gameComplexity].rounds,
      ),
    });
    get().setIsAnswerChosen(false);
  },
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
  saveProgressToHistory: async () => {
    const wholeGameHistory = {
      id: uuid.v4(),
      date: new Date(),
      game_won: get().currentMistakes >= 0,
      difficulty: get().gameComplexity,
      roundsHistory: get().currentGameHistory,
    };

    try {
      await AsyncStorage.setItem(
        `gameHistory_${wholeGameHistory.id}`,
        JSON.stringify(wholeGameHistory),
      );
    } catch (error) {
      console.warn('Error while saving game history', error);
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

  finishModalVisible: false,
  setFinishModalVisible: (visible: boolean) =>
    set({finishModalVisible: visible}),
  isAnswerChosen: false,
  onAnswerChoose: (userAnswer: IGetWeatherByCityNameResponse) => {
    set({
      currentGameHistory: [
        ...get().currentGameHistory,
        {
          round: get().currentRound,
          variants: get().currentRoundVariants,
          userAnswer,
          isCorrect:
            userAnswer.temperature === get().currentCorrectAnswer?.temperature,
          correctAnswer: get()
            .currentCorrectAnswer as IGetWeatherByCityNameResponse,
        },
      ],
    });
  },
  setIsAnswerChosen: (param: boolean) => set({isAnswerChosen: param}),
}));

export default useGameStore;
