import React from 'react';

import {ViewStyle} from 'react-native';
import {AnimatedStyleProp} from 'react-native-reanimated';

import {AppButton} from '@primitives';

import styles from './styles';

type Props = {
  title: 'Easy' | 'Medium' | 'Hard';
  onPress: () => void;
  style?: AnimatedStyleProp<ViewStyle>;
};

const DifficultyButton: React.FC<Props> = ({title, onPress, style = {}}) => {
  return (
    <AppButton
      title={title}
      onPress={onPress}
      containerStyle={[styles.container, style]}
      textStyle={styles.text}
    />
  );
};

export default DifficultyButton;
