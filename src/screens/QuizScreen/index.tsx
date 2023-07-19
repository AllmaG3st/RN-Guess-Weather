import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import Cards from './Cards';
import Header from './Header';

import useQuizScreen from './useQuizScreen';

import styles from './styles';

const QuizScreen: React.FC = () => {
  const {
    currentRound,
    loading,
    gameState,
    currentRoundVariants,
    restartGame,
    cardRefs,
    rotateAllCards,
  } = useQuizScreen();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        currentRound={currentRound}
        gameState={gameState}
        restartGame={restartGame}
      />

      <Cards
        gameState={gameState}
        loading={loading}
        currentRoundVariants={currentRoundVariants}
        cardRefs={cardRefs}
        rotateAllCards={rotateAllCards}
      />
    </SafeAreaView>
  );
};

export default QuizScreen;