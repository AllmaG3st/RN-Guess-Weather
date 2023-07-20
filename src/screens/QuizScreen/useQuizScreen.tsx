import {useEffect} from 'react';

import {shallow} from 'zustand/shallow';

import {GAME_STATE} from '@store/data';
import useGameStore from '@store/zustandStore';

const useQuizScreen = () => {
  const {
    gameComplexity,
    currentRound,
    currentMistakes,
    finishModalVisible,
    restartGame,
    getRandomCities,
    setFinishModalVisible,
  } = useGameStore(
    state => ({
      currentRound: state.currentRound,
      gameComplexity: state.gameComplexity,
      finishModalVisible: state.finishModalVisible,
      setFinishModalVisible: state.setFinishModalVisible,
      restartGame: state.restartGame,
      getRandomCities: state.getRandomCities,
      currentMistakes: state.currentMistakes,
    }),
    shallow,
  );

  const gameState = GAME_STATE[gameComplexity];

  useEffect(() => {
    getRandomCities();
  }, [getRandomCities, currentRound]);

  return {
    gameState,
    restartGame,
    currentMistakes,
    finishModalVisible,
    setFinishModalVisible,
  };
};

export default useQuizScreen;
