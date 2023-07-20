import {useEffect} from 'react';

import {shallow} from 'zustand/shallow';

import {GAME_STATE} from '@store/data';
import useGameStore from '@store/zustandStore';

const useQuizScreen = () => {
  const {getRandomCities, gameComplexity} = useGameStore(
    state => ({
      getRandomCities: state.getRandomCities,
      gameComplexity: state.gameComplexity,
    }),
    shallow,
  );

  const gameState = GAME_STATE[gameComplexity];

  useEffect(() => {
    getRandomCities();
  }, [getRandomCities]);

  return {
    gameState,
  };
};

export default useQuizScreen;
