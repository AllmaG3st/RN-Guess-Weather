import {shallow} from 'zustand/shallow';

import useGameStore from '@store/zustandStore';

const useHeader = () => {
  const {
    currentRound,
    restartGame,
    onNextRound,
    currentMistakes,
    isAnswerChosen,
  } = useGameStore(
    state => ({
      currentRound: state.currentRound,
      restartGame: state.restartGame,
      currentMistakes: state.currentMistakes,
      isAnswerChosen: state.isAnswerChosen,
      onNextRound: state.onNextRound,
    }),
    shallow,
  );

  return {
    currentRound,
    restartGame,
    currentMistakes,
    isAnswerChosen,
    onNextRound,
  };
};

export default useHeader;
