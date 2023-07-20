import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';

import Animated from 'react-native-reanimated';

import useHomeScreen from './useHomeScreen';
import {DifficultyButton} from '@components';

import styles from './styles';

const AnimatedText = Animated.createAnimatedComponent(Text);

const HomeScreen = () => {
  const {headerTextOpacity, onDifficultyChange} = useHomeScreen();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AnimatedText style={[styles.headerText, {opacity: headerTextOpacity}]}>
          Choose Difficulty
        </AnimatedText>
      </View>

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
