import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';

import MainStackNavigator from './navigators/MainStackNavigator';

import {COLORS} from '@constants/colors';

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.AppWhite,
  },
};

const Navigation: React.FC = () => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
