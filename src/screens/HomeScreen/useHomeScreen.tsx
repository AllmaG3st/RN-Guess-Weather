import {useCallback, useEffect} from 'react';
import {useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';

import {IGameComplexity} from '@context/types';
import {useGameContext} from '@context/gameContext';

const useHomeScreen = () => {
  const {setGameComplexity} = useGameContext();
  const headerTextOpacity = useSharedValue(1);

  const onDifficultyChange = (difficulty: IGameComplexity) =>
    setGameComplexity(difficulty);

  const toggleTextOpacity = useCallback(() => {
    headerTextOpacity.value = withRepeat(
      withTiming(0.4, {duration: 500}),
      -1,
      true,
    );
  }, [headerTextOpacity]);

  useEffect(() => {
    toggleTextOpacity();
  }, [toggleTextOpacity]);

  return {headerTextOpacity, onDifficultyChange};
};

export default useHomeScreen;
