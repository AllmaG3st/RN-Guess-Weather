import {COLORS} from '@constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.EnglishViolet,
  },
  text: {
    fontSize: 18,
  },
  frontCard: {
    backfaceVisibility: 'hidden',
    position: 'absolute',
    width: '100%',
    zIndex: 5,
  },
  backCard: {
    borderWidth: 4,
    borderRadius: 24,
    backfaceVisibility: 'hidden',
  },
});
