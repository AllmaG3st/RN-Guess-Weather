import React, {PropsWithChildren} from 'react';
import {Text, TextProps} from 'react-native';

import {COLORS, IColors} from '@constants/colors';
import {FONTSIZES, IFontSizes} from '@constants/fonts';

import styles from './styles';

interface Props extends TextProps {
  bold?: boolean;
  color?: IColors;
  fontSize?: IFontSizes;
}

const AppText = ({
  children,
  bold = false,
  fontSize = 'Medium',
  color = 'Black',
  style = {},
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <Text
      style={[
        styles.text,
        bold && styles.textBold,
        color && {color: COLORS[color]},
        fontSize && {fontSize: FONTSIZES[fontSize]},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default AppText;
