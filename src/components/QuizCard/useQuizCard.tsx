import {ForwardedRef, useEffect, useImperativeHandle} from 'react';

import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import useGameStore from '@store/zustandStore';
import {QuizCardRef} from '@screens/QuizScreen/types';

type Props = {
  ref: ForwardedRef<QuizCardRef>;
  name: string;
  temperature: number;
  index: number;
  rotateAllCards: () => void;
};

const useQuizCard = ({
  ref,
  name,
  index,
  temperature,
  rotateAllCards,
}: Props) => {
  const {
    currentCorrectAnswer,
    isAnswerChosen,
    currentMistakes,
    onMistake,
    onAnswerChoose,
    setIsAnswerChosen,
    setFinishModalVisible,
  } = {
    currentCorrectAnswer: useGameStore.use.currentCorrectAnswer(),
    isAnswerChosen: useGameStore.use.isAnswerChosen(),
    currentMistakes: useGameStore.use.currentMistakes(),
    onMistake: useGameStore.use.onMistake(),
    onAnswerChoose: useGameStore.use.onAnswerChoose(),
    setIsAnswerChosen: useGameStore.use.setIsAnswerChosen(),
    setFinishModalVisible: useGameStore.use.setFinishModalVisible(),
  };

  const isAnswerCorrect = currentCorrectAnswer?.temperature === temperature;

  const rotate = useSharedValue(0);
  const borderOpacity = useSharedValue(0.2);
  const translateX = useSharedValue(-500);

  const backCardBorderColor = (opacity: number) => {
    'worklet';

    return isAnswerCorrect
      ? `rgba(11, 224, 15, ${opacity})`
      : `rgba(222, 22, 22, ${opacity})`;
  };

  const wholeCardStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));
  const frontCardStyle = useAnimatedStyle(() => ({
    transform: [{rotateY: `${rotate.value}deg`}],
  }));
  const backCardStyle = useAnimatedStyle(() => ({
    transform: [{rotateY: `${rotate.value + 180}deg`}],
    borderColor: backCardBorderColor(borderOpacity.value),
  }));

  const onRotate = () => {
    if (rotate.value === 180) return;

    if (!isAnswerChosen) {
      onAnswerChoose({
        name,
        temperature,
      });

      if (!isAnswerCorrect) {
        onMistake();
        if (currentMistakes === 0) {
          setFinishModalVisible(true);
        }
      }
    }

    borderOpacity.value = withRepeat(withTiming(1, {duration: 300}), 5, true);
    rotate.value = withTiming(180, {duration: 500});

    setTimeout(() => rotateAllCards(), 700);

    setIsAnswerChosen(true);
  };

  useImperativeHandle(ref, () => ({
    onRotate,
  }));

  useEffect(() => {
    translateX.value = withTiming(0, {duration: 700 + index * 200});
  }, [index, translateX]);

  return {
    onRotate,
    frontCardStyle,
    backCardStyle,
    wholeCardStyle,
  };
};

export default useQuizCard;
