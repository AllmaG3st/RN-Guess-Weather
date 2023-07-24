import {useEffect} from 'react';

import {GAME_STATE} from '@store/data';
import useGameStore from '@store/zustandStore';

const useQuizScreen = () => {
  const {gameComplexity, currentRound, getRandomCities, loading} = {
    gameComplexity: useGameStore.use.gameComplexity(),
    currentRound: useGameStore.use.currentRound(),
    getRandomCities: useGameStore.use.getRandomCities(),
    loading: useGameStore.use.loading(),
  };

  const gameState = GAME_STATE[gameComplexity];

  useEffect(() => {
    getRandomCities();
  }, [getRandomCities, currentRound]);

  return {
    loading,
    gameState,
  };
};

export default useQuizScreen;
