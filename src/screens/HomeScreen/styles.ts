import {StyleSheet} from 'react-native';

import {FONTS} from '@constants/fonts';
import {COLORS} from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    fontFamily: FONTS.CaprasimoRegular,
    color: COLORS.Coral,
  },
  difficultyButtonsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 16,
    gap: 16,
  },
  difficultyButton: {
    paddingVertical: 36,
    borderRadius: 20,
    overflow: 'hidden',
  },
  difficultyButtonText: {
    fontSize: 20,
  },

  historyButton: {
    marginTop: 4,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
  },
});
