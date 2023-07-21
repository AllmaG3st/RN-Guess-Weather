import {useCallback} from 'react';

import {shallow} from 'zustand/shallow';

import useGameStore from '@store/zustandStore';

const useHeader = () => {
  const {
    currentRound,
    restartGame,
    onNextRound,
    currentMistakes,
    isAnswerChosen,
    currentHelp,
    onHelpUse,
  } = useGameStore(
    state => ({
      currentRound: state.currentRound,
      restartGame: state.restartGame,
      currentMistakes: state.currentMistakes,
      isAnswerChosen: state.isAnswerChosen,
      onNextRound: state.onNextRound,
      currentHelp: state.currentHelp,
      onHelpUse: state.onHelpUse,
    }),
    shallow,
  );

  const onHelpPress = useCallback(() => onHelpUse(), [onHelpUse]);

  return {
    currentRound,
    currentHelp,
    restartGame,
    currentMistakes,
    isAnswerChosen,
    onNextRound,
    onHelpPress,
  };
};

export default useHeader;
