import {ForwardedRef, RefObject, useImperativeHandle} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {useGameContext} from '@context/gameContext';
import {QuizCardRef} from '@screens/QuizScreen/types';

type Props = {
  ref: ForwardedRef<QuizCardRef>;
  name: string;
  temperature: number;
  isFirstGuess: RefObject<boolean>;
  toggleIsFirstGuess: () => void;
  rotateAllCards: () => void;
};

const useQuizCard = ({
  ref,
  name,
  temperature,
  isFirstGuess,
  toggleIsFirstGuess,
  rotateAllCards,
}: Props) => {
  const {currentCorrectAnswer, onAnswerChoose} = useGameContext();

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
    if (rotate.value === 180) return;

    if (isFirstGuess.current)
      onAnswerChoose({
        name,
        temperature,
      });

    borderOpacity.value = withRepeat(withTiming(1, {duration: 300}), 5, true);
    rotate.value = withTiming(180, {duration: 500});

    setTimeout(() => rotateAllCards(), 1000);
    toggleIsFirstGuess();
  };

  useImperativeHandle(ref, () => ({
    onRotate,
  }));

  return {
    onRotate,
    frontCardStyle,
    backCardStyle,
  };
};

export default useQuizCard;
