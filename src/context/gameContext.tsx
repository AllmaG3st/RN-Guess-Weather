import React, {useCallback, useContext, useMemo} from 'react';
import {PropsWithChildren, createContext, useState} from 'react';

import {navigationRef} from '@navigation';
import cities from '../data/cityNames.json';
import {CITIES_LENGTH, GAME_STATE} from './data';
import {getSeveralCitiesWeather} from '@api/weather';
import {IGameComplexity, IGameContext, IGameHistory} from './types';
import {IGetWeatherByCityNameResponse} from '@api/types';

export const GameContext = createContext<IGameContext>({
  currentRound: 1,
  loading: false,
  gameState: GAME_STATE.easy,
  gameComplexity: 'easy',
  currentRoundVariants: [],
  currentCorrectAnswer: undefined,
  onNextRound: () => {},
  restartGame: () => {},
  setGameComplexity: () => {},
  getRandomCities: () => {},
});

export const GameContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [gameComplexity, setGameComplexity] = useState<IGameComplexity>('easy');

  const [currentGameHistory, setCurrentGameHistory] = useState<IGameHistory[]>(
    [],
  );
  const [currentRound, setCurrentRound] = useState(1);
  const [currentRoundVariants, setCurrentRoundVariants] = useState<
    IGetWeatherByCityNameResponse[]
  >([]);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] =
    useState<IGetWeatherByCityNameResponse>();

  const gameState = useMemo(() => GAME_STATE[gameComplexity], [gameComplexity]);

  const onNextRound = useCallback(() => {
    setCurrentRound(prev => prev + 1);
  }, []);

  const onAnswerChoose = (userAnswer: IGetWeatherByCityNameResponse) => {
    setCurrentGameHistory(prev => [
      ...prev,
      {
        variants: currentRoundVariants,
        userAnswer: userAnswer,
      },
    ]);
  };

  const restartGame = useCallback(() => {
    setCurrentRoundVariants([]);
    setCurrentRound(1);
    navigationRef.reset({
      index: 1,
      routes: [{name: 'HomeScreen'}],
    });
  }, []);

  const getRandomCities = useCallback(async () => {
    setLoading(true);

    try {
      const {variants} = GAME_STATE[gameComplexity];

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

      setCurrentRoundVariants(citiesWeather);
      setCurrentCorrectAnswer(correctAnswer);
    } catch (error) {
      console.warn('Error while fetching cities weather', error);
    } finally {
      // Setting timeout because request is resolving too fast and loader is not visible
      setTimeout(() => setLoading(false), 1000);
    }
  }, [gameComplexity]);

  return (
    <GameContext.Provider
      value={{
        currentRound,
        loading,
        gameState,
        gameComplexity,
        currentRoundVariants,
        currentCorrectAnswer,
        restartGame,
        onNextRound,
        setGameComplexity,
        getRandomCities,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
