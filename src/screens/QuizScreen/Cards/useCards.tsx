import {useGameContext} from '@context/gameContext';
import {QuizCardRef} from '../types';
import {useRef} from 'react';

const useCards = () => {
  const {currentRoundVariants, loading} = useGameContext();

  const cardRefs = useRef<QuizCardRef[]>([]);

  const isFirstGuess = useRef(true);
  const toggleIsFirstGuess = () => (isFirstGuess.current = false);

  const rotateAllCards = () => {
    cardRefs.current.forEach((cardRef, index) => {
      if (cardRef) {
        setTimeout(() => cardRef.onRotate(), (index + 1) * 200);
      }
    });
  };

  return {
    currentRoundVariants,
    loading,
    cardRefs,
    isFirstGuess,
    toggleIsFirstGuess,
    rotateAllCards,
  };
};

export default useCards;
