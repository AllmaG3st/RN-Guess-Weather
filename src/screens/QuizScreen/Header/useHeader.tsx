import {useGameContext} from '@context/gameContext';

const useHeader = () => {
  const {currentRound, restartGame} = useGameContext();

  return {currentRound, restartGame};
};

export default useHeader;
