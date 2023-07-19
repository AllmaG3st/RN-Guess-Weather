import {ForwardedRef, useImperativeHandle, useState} from 'react';
import {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {useGameContext} from '@context/gameContext';
import {QuizCardRef} from '@screens/QuizScreen/types';

type Props = {
  temperature: number;
  rotateAllCards: () => void;
  ref: ForwardedRef<QuizCardRef>;
};

const useQuizCard = ({temperature, rotateAllCards, ref}: Props) => {
  const [rotateValue, setRotateValue] = useState(0);

  const {currentCorrectAnswer} = useGameContext();

  const rotate = useSharedValue(0);
  const borderOpacity = useSharedValue(0.2);

  const backCardBorderColor = (opacity: number) => {
    'worklet';

    return currentCorrectAnswer?.temperature === temperature
      ? `rgba(11, 224, 15, ${opacity})`
      : `rgba(222, 22, 22, ${opacity})`;
  };

  const frontCardStyle = useAnimatedStyle(() => ({
    transform: [{rotateY: `${rotate.value}deg`}],
  }));
  const backCardStyle = useAnimatedStyle(() => ({
    transform: [{rotateY: `${rotate.value + 180}deg`}],
    borderColor: backCardBorderColor(borderOpacity.value),
  }));

  const onRotate = () => {
    borderOpacity.value = withRepeat(withTiming(1, {duration: 300}), 5, true);
    rotate.value = withTiming(
      rotate.value === 180 ? 0 : 180,
      {duration: 500},
      () => runOnJS(setRotateValue)(rotate.value),
    );

    setTimeout(() => rotateAllCards(), 1200);
  };

  useImperativeHandle(
    ref,
    () => ({
      rotateValue,
      onRotate,
    }),
    [rotateValue],
  );

  return {
    onRotate,
    frontCardStyle,
    backCardStyle,
    rotateValue,
  };
};

export default useQuizCard;
