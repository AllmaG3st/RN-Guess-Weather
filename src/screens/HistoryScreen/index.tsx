import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import {AppButton, AppText} from '@primitives';
import useHistoryScreen from './useHistoryScreen';
import styles from './styles';

const HistoryScreen: React.FC = () => {
  const {gameHistories, onPlayAgain, renderSingleHistory} = useHistoryScreen();

  return (
    <SafeAreaView>
      <AppText
        centered
        fontFamily="CaprasimoRegular"
        fontSize="MegaLarge"
        color="Coral">
        Your History
      </AppText>

      <AppButton
        title="Play Again"
        onPress={onPlayAgain}
        containerStyle={styles.playAgainButton}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={gameHistories}
        renderItem={renderSingleHistory}
      />
    </SafeAreaView>
  );
};

export default HistoryScreen;
