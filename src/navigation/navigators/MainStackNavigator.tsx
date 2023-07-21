import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HistoryScreen, HomeScreen, QuizScreen} from '@screens';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="QuizScreen" component={QuizScreen} />
      <MainStack.Screen name="HistoryScreen" component={HistoryScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
