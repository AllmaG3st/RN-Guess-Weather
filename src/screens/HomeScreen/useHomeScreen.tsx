import {useCallback, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';

import {IGameComplexity} from '@store/types';
import useGameStore from '@store/zustandStore';
import {MainStackNavigationGenericProp} from '@navigation/types';

const useHomeScreen = () => {
  const setGameComplexity = useGameStore.use.setGameComplexity();

  const {navigate} =
    useNavigation<MainStackNavigationGenericProp<'HomeScreen'>>();
  const headerTextOpacity = useSharedValue(1);

  const onHistoryPress = () => navigate('HistoryScreen');

  const onDifficultyChange = (difficulty: IGameComplexity) => {
    setGameComplexity(difficulty);
    navigate('QuizScreen');
  };

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

  return {headerTextOpacity, onDifficultyChange, onHistoryPress};
};

export default useHomeScreen;
