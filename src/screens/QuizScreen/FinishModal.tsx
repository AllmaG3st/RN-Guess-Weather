import React from 'react';
import {View} from 'react-native';

import {IGameState} from '@context/types';
import {AppButton, AppText} from '@primitives';

import styles from './styles';

type Props = {
  restartGame: () => void;
  gameState: IGameState;
  setGameFinishModal: (value: boolean) => void;
};

const FinishModal: React.FC<Props> = ({
  gameState,
  setGameFinishModal,
  restartGame,
}) => {
  const onRestartPress = () => {
    setGameFinishModal(false);
    // To wait for modal animation to finish
    setTimeout(() => restartGame(), 250);
  };

  return (
    <View style={styles.modalContainer}>
      <AppText
        fontFamily="CaprasimoRegular"
        fontSize="ExtraExtraLarge"
        color="Red">
        Game Over
      </AppText>

      <AppText
        fontFamily="CaprasimoRegular"
        fontSize="Large"
        color="EnglishViolet"
        style={styles.mistakesText}>
        You have made {gameState.mistakes + 1} mistakes. Please try again.
      </AppText>

      <AppButton
        onPress={onRestartPress}
        title={'Restart'}
        containerStyle={styles.modalButton}
      />
    </View>
  );
};

export default FinishModal;
