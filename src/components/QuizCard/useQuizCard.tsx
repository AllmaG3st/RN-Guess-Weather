import {useGameContext} from '@context/gameContext';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

const useQuizCard = (temperature: number) => {
  const {currentCorrectAnswer} = useGameContext();

  const rotate = useSharedValue(0);
  const borderOpacity = useSharedValue(0.2);

  const backCardBorderColor = (opacity: number) => {
    'worklet';

    return currentCorrectAnswer?.temperature === temperature
      ? `rgba(11, 224, 15, ${opacity})`
      : `rgba(222, 22, 22, ${opacity})`;
  };

  const onRotate = () => {
    borderOpacity.value = withRepeat(withTiming(1, {duration: 300}), 7, true);
    rotate.value = withTiming(180, {duration: 500});
  };

  const frontCardStyle = useAnimatedStyle(() => ({
    transform: [{rotateY: `${rotate.value}deg`}],
  }));

  const backCardStyle = useAnimatedStyle(() => ({
    transform: [{rotateY: `${rotate.value + 180}deg`}],
    borderColor: backCardBorderColor(borderOpacity.value),
  }));

  return {
    onRotate,
    frontCardStyle,
    backCardStyle,
  };
};

export default useQuizCard;
