import React from 'react';
import {View} from 'react-native';

import Animated from 'react-native-reanimated';

import {AppButton} from '@primitives';
import useQuizCard from './useQuizCard';

import styles from './styles';

type Props = {name: string; temperature: number};

const QuizCard: React.FC<Props> = ({name, temperature}) => {
  const {frontCardStyle, backCardStyle, onRotate} = useQuizCard(temperature);

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
          title={temperature}
          containerStyle={styles.container}
          textStyle={styles.text}
        />
      </Animated.View>
    </View>
  );
};

export default QuizCard;
