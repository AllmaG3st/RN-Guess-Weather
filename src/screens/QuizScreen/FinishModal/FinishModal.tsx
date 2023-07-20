import React from 'react';
import {View} from 'react-native';

import {IGameState} from '@context/types';
import useFinishModal from './useFinishModal';
import {AppButton, AppModal, AppText} from '@primitives';

import styles from '../styles';

type Props = {
  gameState: IGameState;
};

const FinishModal: React.FC<Props> = ({gameState}) => {
  const {modalTitle, modalText, buttonText, finishModalVisible, onRestartGame} =
    useFinishModal(gameState);

  return (
    <AppModal visible={finishModalVisible} style={styles.modalWrapper}>
      <View style={styles.modalContainer}>
        <AppText
          fontFamily="CaprasimoRegular"
          fontSize="ExtraExtraLarge"
          color="Red">
          {modalTitle}
        </AppText>

        <AppText
          fontFamily="CaprasimoRegular"
          fontSize="Large"
          color="EnglishViolet"
          style={styles.mistakesText}>
          {modalText}
        </AppText>

        <AppButton
          onPress={onRestartGame}
          title={buttonText}
          containerStyle={styles.modalButton}
        />
      </View>
    </AppModal>
  );
};

export default FinishModal;
