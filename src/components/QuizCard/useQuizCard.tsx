import {ForwardedRef, useImperativeHandle} from 'react';

import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {shallow} from 'zustand/shallow';

import {QuizCardRef} from '@screens/QuizScreen/types';
import useGameStore from '@store/zustandStore';

type Props = {
  ref: ForwardedRef<QuizCardRef>;
  name: string;
  temperature: number;
  rotateAllCards: () => void;
};

const useQuizCard = ({ref, name, temperature, rotateAllCards}: Props) => {
  const {
    currentCorrectAnswer,
    onAnswerChoose,
    isAnswerChosen,
    setIsAnswerChosen,
  } = useGameStore(
    state => ({
      isAnswerChosen: state.isAnswerChosen,
      currentCorrectAnswer: state.currentCorrectAnswer,
      onAnswerChoose: state.onAnswerChoose,
      setIsAnswerChosen: state.setIsAnswerChosen,
    }),
    shallow,
  );

  const isAnswerCorrect = currentCorrectAnswer?.temperature === temperature;

  const rotate = useSharedValue(0);
  const borderOpacity = useSharedValue(0.2);

  const backCardBorderColor = (opacity: number) => {
    'worklet';

    return isAnswerCorrect
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

    if (!isAnswerChosen)
      onAnswerChoose({
        name,
        temperature,
      });

    borderOpacity.value = withRepeat(withTiming(1, {duration: 300}), 5, true);
    rotate.value = withTiming(180, {duration: 500});

    setTimeout(() => rotateAllCards(), 1000);
    setIsAnswerChosen(true);
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
