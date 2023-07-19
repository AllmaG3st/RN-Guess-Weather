import React, {useContext} from 'react';
import {PropsWithChildren, createContext, useState} from 'react';

import cities from '../data/cityNames.json';
import {CITIES_LENGTH, GAME_STATE} from './data';
import {IGameComplexity, IGameContext} from './types';
import {getSeveralCitiesWeather} from '@api/weather';
import {IGetWeatherByCityNameResponse} from '@api/types';

export const GameContext = createContext<IGameContext>({
  gameComplexity: 'easy',
  currentRoundVariants: [],
  setGameComplexity: () => {},
  getRandomCities: () => {},
});

export const GameContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const [gameComplexity, setGameComplexity] = useState<IGameComplexity>('easy');
  const [currentRoundVariants, setCurrentRoundVariants] = useState<
    IGetWeatherByCityNameResponse[]
  >([]);

  const getRandomCities = async () => {
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

      setCurrentRoundVariants(citiesWeather);
    } catch (error) {
      console.warn('Error while fetching cities weather', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GameContext.Provider
      value={{
        gameComplexity,
        setGameComplexity,
        getRandomCities,
        currentRoundVariants,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
