import {View, StyleSheet, ViewStyle} from 'react-native';
import React from 'react';

import {COLORS} from '@constants/colors';

type AppSeparatorProps = {
  bgColor?: string;
  style?: ViewStyle;
};

const AppSeparator = ({
  bgColor = COLORS.LightGray,
  style,
}: AppSeparatorProps) => {
  return (
    <View
      style={[
        styles.separator,
        bgColor ? {backgroundColor: bgColor} : {},
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: StyleSheet.hairlineWidth,
  },
});

export default AppSeparator;
