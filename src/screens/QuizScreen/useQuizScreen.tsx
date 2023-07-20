import {useEffect} from 'react';

import {useGameContext} from '@context/gameContext';

const useQuizScreen = () => {
  const {gameState, getRandomCities} = useGameContext();

  useEffect(() => {
    getRandomCities();
  }, [getRandomCities]);

  return {
    gameState,
  };
};

export default useQuizScreen;
