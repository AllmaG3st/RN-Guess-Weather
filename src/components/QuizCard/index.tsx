import {View} from 'react-native';
import React, {ForwardRefRenderFunction, forwardRef} from 'react';

import Animated from 'react-native-reanimated';

import {AppButton} from '@primitives';
import useQuizCard from './useQuizCard';
import {QuizCardRef} from '@screens/QuizScreen/types';

import styles from './styles';

type Props = {name: string; temperature: number; rotateAllCards: () => void};

const QuizCard: ForwardRefRenderFunction<QuizCardRef, Props> = (
  {name, temperature, rotateAllCards},
  ref,
) => {
  const {frontCardStyle, backCardStyle, onRotate} = useQuizCard({
    temperature,
    rotateAllCards,
    ref,
  });

  return (
    <View>
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
    </View>
  );
};

export default forwardRef(QuizCard);
