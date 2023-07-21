import React from 'react';
import {View, SafeAreaView} from 'react-native';

import Header from './Header';
import useHomeScreen from './useHomeScreen';
import {DifficultyButton} from '@components';

import styles from './styles';

const HomeScreen = () => {
  const {headerTextOpacity, onDifficultyChange, onHistoryPress} =
    useHomeScreen();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        headerTextOpacity={headerTextOpacity}
        onReviewHistoryPress={onHistoryPress}
      />

      <View style={styles.difficultyButtonsContainer}>
        <DifficultyButton
          title="Easy"
          onPress={() => onDifficultyChange('easy')}
        />
        <DifficultyButton
          title="Medium"
          onPress={() => onDifficultyChange('medium')}
        />
        <DifficultyButton
          title="Hard"
          onPress={() => onDifficultyChange('hard')}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
