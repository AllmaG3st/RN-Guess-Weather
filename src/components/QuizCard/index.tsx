import React, {ForwardRefRenderFunction, forwardRef, memo} from 'react';

import Animated from 'react-native-reanimated';

import {AppButton} from '@primitives';
import useQuizCard from './useQuizCard';
import {QuizCardRef} from '@screens/QuizScreen/types';

import styles from './styles';

type Props = {
  name: string;
  temperature: number;
  index: number;
  rotateAllCards: () => void;
};

const QuizCard: ForwardRefRenderFunction<QuizCardRef, Props> = (
  {name, temperature, index, rotateAllCards},
  ref,
) => {
  const {frontCardStyle, backCardStyle, wholeCardStyle, onRotate} = useQuizCard(
    {
      ref,
      name,
      index,
      temperature,
      rotateAllCards,
    },
  );

  return (
    <Animated.View style={wholeCardStyle}>
      <Animated.View style={[styles.frontCard, frontCardStyle]}>
        <AppButton
          onPress={onRotate}
          title={name}
          containerStyle={styles.container}
          textStyle={styles.text}
        />
      </Animated.View>

      <Animated.View style={[styles.backCard, backCardStyle]}>
        <AppButton
          title={`${name}: ${temperature}`}
          containerStyle={styles.container}
          textStyle={styles.text}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default memo(forwardRef(QuizCard));
