import React from 'react';

import {AppButton} from '@primitives';

import styles from './styles';

type Props = {
  title: 'Easy' | 'Medium' | 'Hard';
};

const DifficultyButton: React.FC<Props> = ({title}) => {
  return (
    <AppButton
      title={title}
      containerStyle={styles.container}
      textStyle={styles.text}
    />
  );
};

export default DifficultyButton;
