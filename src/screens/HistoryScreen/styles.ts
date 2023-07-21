import {COLORS} from '@constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  historyContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,

    borderWidth: 3,
    borderColor: COLORS.EnglishViolet,
    borderRadius: 20,
  },
  playAgainButton: {
    marginVertical: 16,
    padding: 16,
    borderRadius: 20,
    alignSelf: 'center',
  },
  gameGeneralInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    height: 2,
  },
  marginBetween: {
    marginBottom: 8,
  },
});
