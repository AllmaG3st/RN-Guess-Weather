import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import Cards from './Cards/Cards';
import Header from './Header/Header';
import FinishModal from './FinishModal';
import useQuizScreen from './useQuizScreen';

import {AppModal} from '@primitives';

import styles from './styles';

const QuizScreen: React.FC = () => {
  const {gameState, restartGame, setFinishModalVisible, finishModalVisible} =
    useQuizScreen();

  return (
    <SafeAreaView style={styles.container}>
      <Header gameState={gameState} />

      <Cards gameState={gameState} />

      <AppModal visible={finishModalVisible} style={styles.modalWrapper}>
        <FinishModal
          setGameFinishModal={setFinishModalVisible}
          gameState={gameState}
          restartGame={restartGame}
        />
      </AppModal>
    </SafeAreaView>
  );
};

export default QuizScreen;
