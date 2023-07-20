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
  const {currentRound, restartGame, currentMistakes, isAnswerChosen} =
    useHeader();

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

      <View style={[styles.gameInfo, {marginTop: 10}]}>
        <AppText
          fontFamily="CaprasimoRegular"
          fontSize="ExtraLarge"
          color="Coral">
          Mistakes Left: {currentMistakes} of{' '}
          <AppText
            fontFamily="CaprasimoRegular"
            fontSize="ExtraLarge"
            color="EnglishViolet">
            {gameState.mistakes}
          </AppText>
        </AppText>

        <AppButton
          title="Next"
          disabled={!isAnswerChosen}
          containerStyle={styles.restartButtonContainer}
          textStyle={styles.restartButtonText}
          onPress={restartGame}
        />
      </View>
    </View>
  );
};

export default Header;
