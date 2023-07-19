import {Text, View} from 'react-native';
import React from 'react';

import useQuizScreen from './useQuizScreen';
import {AppButton, AppText} from '@primitives';

import styles from './styles';
import {IGameState} from '@context/types';

type Props = {
  currentRound: number;
  gameState: IGameState;
  restartGame: () => void;
};

const Header: React.FC<Props> = ({currentRound, gameState, restartGame}) => {
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
