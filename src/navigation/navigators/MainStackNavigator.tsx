import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '@screens';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
