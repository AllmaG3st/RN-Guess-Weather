import {StyleSheet} from 'react-native';

import {COLORS} from '@constants/colors';
import {FONTS} from '@constants/fonts';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_PRIMARY: {
    backgroundColor: COLORS.EnglishViolet,
  },
  container_SECONDARY: {
    borderColor: COLORS.EnglishViolet,
    borderWidth: 3,
  },

  text: {
    textTransform: 'uppercase',
    fontFamily: FONTS.CaprasimoRegular,
  },
  text_PRIMARY: {
    color: COLORS.AppWhite,
  },
  text_SECONDARY: {
    color: COLORS.EnglishViolet,
  },
});
