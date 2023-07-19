import {useGameContext} from '@context/gameContext';
import {useEffect} from 'react';

const useQuizScreen = () => {
  const {
    gameState,
    loading,
    currentRound,
    currentRoundVariants,
    restartGame,
    getRandomCities,
  } = useGameContext();

  useEffect(() => {
    getRandomCities();
  }, []);

  return {gameState, loading, currentRound, restartGame, currentRoundVariants};
};

export default useQuizScreen;
