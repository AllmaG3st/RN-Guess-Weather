import {View} from 'react-native';
import React from 'react';

import Row from './Row';
import {AppButton, AppText} from '@primitives';
import useHeader from './useHeader';
import {IGameState} from '@store/types';

import styles from '../styles';

type Props = {
  gameState: IGameState;
  loading: boolean;
};

const Header: React.FC<Props> = ({gameState, loading}) => {
  const {
    currentRound,
    currentHelp,
    restartGame,
    currentMistakes,
    isAnswerChosen,
    onNextRound,
    onHelpPress,
  } = useHeader();

  return (
    <View style={styles.headerContainer}>
      <AppText
        fontFamily="CaprasimoRegular"
        fontSize="ExtraExtraLarge"
        color="EnglishViolet"
        style={styles.headerTitle}>
        Guess Highest Temperature
      </AppText>

      <Row
        innerText={`Round: ${currentRound} of `}
        outerText={gameState.rounds}
        buttonTitle="Restart"
        onButtonPress={restartGame}
      />

      <View style={styles.separator} />

      <Row
        innerText={`Mistakes Left: ${
          currentMistakes < 0 ? 0 : currentMistakes
        } of `}
        outerText={gameState.mistakes}
        buttonTitle={currentRound === gameState.rounds ? 'Finish' : 'Next'}
        onButtonPress={onNextRound}
        disabled={!isAnswerChosen}
      />

      {currentHelp ? (
        <AppButton
          type="SECONDARY"
          onPress={onHelpPress}
          title={'50/50'}
          disabled={isAnswerChosen || loading}
          containerStyle={styles.helpButton}
        />
      ) : (
        <View style={styles.emptyContainer} />
      )}
    </View>
  );
};

export default Header;
