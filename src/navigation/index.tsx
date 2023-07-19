import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';

import MainStackNavigator from './navigators/MainStackNavigator';

import {COLORS} from '@constants/colors';

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.AppWhite,
  },
};

export const navigationRef = createNavigationContainerRef();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
