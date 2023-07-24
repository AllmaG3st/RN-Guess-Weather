import {useRef} from 'react';

import {QuizCardRef} from '../types';
import useGameStore from '@store/zustandStore';

const useCards = () => {
  const {currentRoundVariants, loading} = {
    currentRoundVariants: useGameStore.use.currentRoundVariants(),
    loading: useGameStore.use.loading(),
  };

  const cardRefs = useRef<QuizCardRef[]>([]);

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
    rotateAllCards,
  };
};

export default useCards;
