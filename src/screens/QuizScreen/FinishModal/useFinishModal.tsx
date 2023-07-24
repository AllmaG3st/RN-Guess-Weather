import {useEffect} from 'react';

import {IGameState} from '@store/types';
import useGameStore from '@store/zustandStore';

const useFinishModal = (gameState: IGameState) => {
  const {
    finishModalVisible,
    currentMistakes,
    saveProgressToHistory,
    setFinishModalVisible,
    restartGame,
  } = {
    finishModalVisible: useGameStore.use.finishModalVisible(),
    currentMistakes: useGameStore.use.currentMistakes(),
    saveProgressToHistory: useGameStore.use.saveProgressToHistory(),
    setFinishModalVisible: useGameStore.use.setFinishModalVisible(),
    restartGame: useGameStore.use.restartGame(),
  };

  useEffect(() => {
    if (finishModalVisible) {
      saveProgressToHistory();
    }
  }, [saveProgressToHistory, finishModalVisible]);

  const modalTitle = currentMistakes >= 0 ? 'Congratulations!' : 'Game Over';

  const modalTextEnd =
    currentMistakes >= 0 ? 'You can play a new game!' : 'Please try again.';

  const modalText =
    currentMistakes >= 0
      ? `You have ${currentMistakes} mistakes left ${modalTextEnd}`
      : `You have made ${gameState.mistakes + 1} mistakes. ${modalTextEnd}`;

  const buttonText = currentMistakes >= 0 ? 'Play again' : 'Restart';

  const onRestartGame = () => {
    setFinishModalVisible(false);
    // To wait for modal animation to finish
    setTimeout(() => restartGame(), 250);
  };

  return {
    modalTitle,
    modalText,
    buttonText,
    finishModalVisible,
    onRestartGame,
  };
};

export default useFinishModal;
