import {View} from 'react-native';
import React from 'react';

import useHeader from './useHeader';
import {IGameState} from '@context/types';
import {AppButton, AppText} from '@primitives';

import styles from '../styles';

type Props = {
  gameState: IGameState;
};

const Header: React.FC<Props> = ({gameState}) => {
  const {currentRound, restartGame} = useHeader();

  return (
    <View style={styles.headerContainer}>
      <AppText
        fontFamily="CaprasimoRegular"
        fontSize="ExtraExtraLarge"
        color="EnglishViolet"
        style={styles.headerTitle}>
        Guess Highest Temperature
      </AppText>

      <View style={styles.gameInfo}>
        <AppText
          fontFamily="CaprasimoRegular"
          fontSize="ExtraLarge"
          color="Coral">
          Round: {currentRound} of{' '}
          <AppText
            fontFamily="CaprasimoRegular"
            fontSize="ExtraLarge"
            color="EnglishViolet">
            {gameState.rounds}
          </AppText>
        </AppText>

        <AppButton
          title="Restart"
          containerStyle={styles.restartButtonContainer}
          textStyle={styles.restartButtonText}
          onPress={restartGame}
        />
      </View>
    </View>
  );
};

export default Header;
