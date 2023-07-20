import useGameStore from '@store/zustandStore';

const useHeader = () => {
  const {currentRound, restartGame, currentMistakes, isAnswerChosen} =
    useGameStore(state => ({
      currentRound: state.currentRound,
      restartGame: state.restartGame,
      currentMistakes: state.currentMistakes,
      isAnswerChosen: state.isAnswerChosen,
    }));

  return {currentRound, restartGame, currentMistakes, isAnswerChosen};
};

export default useHeader;
