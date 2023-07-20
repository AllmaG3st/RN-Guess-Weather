import {View} from 'react-native';
import React from 'react';

import Row from './Row';
import {AppText} from '@primitives';
import useHeader from './useHeader';
import {IGameState} from '@context/types';

import styles from '../styles';

type Props = {
  gameState: IGameState;
};

const Header: React.FC<Props> = ({gameState}) => {
  const {
    currentRound,
    restartGame,
    currentMistakes,
    isAnswerChosen,
    onNextRound,
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
        buttonTitle="Next"
        onButtonPress={onNextRound}
        disabled={!isAnswerChosen}
      />
    </View>
  );
};

export default Header;
