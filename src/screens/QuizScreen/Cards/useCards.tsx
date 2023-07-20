import {QuizCardRef} from '../types';
import {useRef} from 'react';
import useGameStore from '@store/zustandStore';
import {shallow} from 'zustand/shallow';

const useCards = () => {
  const {currentRoundVariants, loading} = useGameStore(
    state => ({
      currentRoundVariants: state.currentRoundVariants,
      loading: state.loading,
    }),
    shallow,
  );

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
