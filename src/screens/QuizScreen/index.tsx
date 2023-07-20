import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

import Cards from './Cards/Cards';
import Header from './Header/Header';
import useQuizScreen from './useQuizScreen';
import FinishModal from './FinishModal/FinishModal';

import styles from './styles';

const QuizScreen: React.FC = () => {
  const {gameState} = useQuizScreen();

  return (
    <SafeAreaView style={styles.container}>
      <Header gameState={gameState} />

      <Cards gameState={gameState} />

      <FinishModal gameState={gameState} />
    </SafeAreaView>
  );
};

export default QuizScreen;
