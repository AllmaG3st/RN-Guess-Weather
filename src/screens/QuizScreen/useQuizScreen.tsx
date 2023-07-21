import {useEffect} from 'react';

import {shallow} from 'zustand/shallow';

import {GAME_STATE} from '@store/data';
import useGameStore from '@store/zustandStore';

const useQuizScreen = () => {
  const {gameComplexity, currentRound, getRandomCities, loading} = useGameStore(
    state => ({
      currentRound: state.currentRound,
      gameComplexity: state.gameComplexity,
      getRandomCities: state.getRandomCities,
      loading: state.loading,
    }),
    shallow,
  );

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
