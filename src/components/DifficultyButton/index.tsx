import React from 'react';

import {AppButton} from '@primitives';
import {IGameComplexity} from '@context/types';

import styles from './styles';

type Props = {
  title: 'Easy' | 'Medium' | 'Hard';
  onPress: () => void;
};

const DifficultyButton: React.FC<Props> = ({title, onPress}) => {
  return (
    <AppButton
      title={title}
      onPress={onPress}
      containerStyle={styles.container}
      textStyle={styles.text}
    />
  );
};

export default DifficultyButton;
