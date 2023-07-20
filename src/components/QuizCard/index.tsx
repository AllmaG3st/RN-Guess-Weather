import {View} from 'react-native';
import React, {ForwardRefRenderFunction, RefObject, forwardRef} from 'react';

import Animated from 'react-native-reanimated';

import {AppButton} from '@primitives';
import useQuizCard from './useQuizCard';
import {QuizCardRef} from '@screens/QuizScreen/types';

import styles from './styles';

type Props = {
  name: string;
  temperature: number;
  isFirstGuess: RefObject<boolean>;
  toggleIsFirstGuess: () => void;
  rotateAllCards: () => void;
};

const QuizCard: ForwardRefRenderFunction<QuizCardRef, Props> = (
  {name, temperature, isFirstGuess, toggleIsFirstGuess, rotateAllCards},
  ref,
) => {
  const {frontCardStyle, backCardStyle, onRotate} = useQuizCard({
    ref,
    name,
    temperature,
    isFirstGuess,
    toggleIsFirstGuess,
    rotateAllCards,
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
