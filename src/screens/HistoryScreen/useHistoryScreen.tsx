import React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {ListRenderItem} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {IGameHistory} from '@store/types';
import SingleHistory from './SingleHistory';
import {MainStackNavigationGenericProp} from '@navigation/types';

const useHistoryScreen = () => {
  const {goBack} =
    useNavigation<MainStackNavigationGenericProp<'HistoryScreen'>>();

  const [gameHistories, setGameHistories] = useState<IGameHistory[]>([]);

  useEffect(() => {
    getHistory();
  }, []);

  const renderSingleHistory = useCallback<ListRenderItem<IGameHistory>>(
    ({item}) => {
      return <SingleHistory gameHistory={item} />;
    },
    [gameHistories],
  );

  const onPlayAgain = useCallback(() => goBack(), [goBack]);

  const getHistory = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const gameHistoryKeys = keys.filter(key => key.startsWith('gameHistory'));

      const gameHistory = await AsyncStorage.multiGet(gameHistoryKeys);

      const parsedGameHistories = gameHistory
        .map(history => {
          const [_, value] = history;
          return value ? JSON.parse(value) : undefined;
        })
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

      setGameHistories(parsedGameHistories);
    } catch (error) {
      console.warn('Error getting history', error);
    }
  };

  return {gameHistories, onPlayAgain, renderSingleHistory};
};

export default useHistoryScreen;
