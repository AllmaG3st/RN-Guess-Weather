import {useCallback} from 'react';

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
  } = {
    currentRound: useGameStore.use.currentRound(),
    restartGame: useGameStore.use.restartGame(),
    onNextRound: useGameStore.use.onNextRound(),
    currentMistakes: useGameStore.use.currentMistakes(),
    isAnswerChosen: useGameStore.use.isAnswerChosen(),
    currentHelp: useGameStore.use.currentHelp(),
    onHelpUse: useGameStore.use.onHelpUse(),
  };

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
