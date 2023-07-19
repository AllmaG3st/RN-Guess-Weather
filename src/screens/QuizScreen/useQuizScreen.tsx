import {useGameContext} from '@context/gameContext';
import {useEffect, useRef} from 'react';
import {QuizCardRef} from './types';

const useQuizScreen = () => {
  const {
    gameState,
    loading,
    currentRound,
    currentRoundVariants,
    restartGame,
    getRandomCities,
  } = useGameContext();

  const cardRefs = useRef<QuizCardRef[]>([]);

  const rotateAllCards = () => {
    cardRefs.current.forEach((cardRef, index) => {
      if (cardRef.rotateValue === 0) {
        setTimeout(() => cardRef.onRotate(), (index + 1) * 200);
      }
    });
  };

  useEffect(() => {
    getRandomCities();
  }, []);

  return {
    gameState,
    loading,
    currentRound,
    restartGame,
    currentRoundVariants,
    rotateAllCards,
    cardRefs,
  };
};

export default useQuizScreen;
