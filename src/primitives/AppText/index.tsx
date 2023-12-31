import React from 'react';
import {Text, TextProps} from 'react-native';

import {COLORS, IColors} from '@constants/colors';
import {FONTS, FONTSIZES, IFontSizes, IFonts} from '@constants/fonts';

import styles from './styles';

interface Props extends TextProps {
  bold?: boolean;
  color?: IColors;
  fontSize?: IFontSizes;
  centered?: boolean;
  fontFamily?: IFonts;
}

const AppText: React.FC<Props> = ({
  children,
  bold = false,
  fontSize = 'Medium',
  centered = false,
  fontFamily,
  color = 'Black',
  style = {},
  ...props
}) => {
  return (
    <Text
      style={[
        styles.text,
        bold && styles.textBold,
        color && {color: COLORS[color]},
        centered && {textAlign: 'center'},
        fontSize && {fontSize: FONTSIZES[fontSize]},
        fontFamily && {fontFamily: FONTS[fontFamily]},
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default AppText;
