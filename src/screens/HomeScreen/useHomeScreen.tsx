import {useCallback, useEffect} from 'react';

import {useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

import {IGameComplexity} from '@context/types';
import {useGameContext} from '@context/gameContext';
import {MainStackNavigationGenericProp} from '@navigation/types';

const useHomeScreen = () => {
  const {navigate} =
    useNavigation<MainStackNavigationGenericProp<'HomeScreen'>>();
  const headerTextOpacity = useSharedValue(1);

  const {setGameComplexity} = useGameContext();

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

  return {headerTextOpacity, onDifficultyChange};
};

export default useHomeScreen;
