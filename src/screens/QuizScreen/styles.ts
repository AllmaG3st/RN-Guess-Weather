import {COLORS} from '@constants/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // ===== SCREEN STYLES =====
  container: {
    flex: 1,
  },

  // ===== HEADER STYLES =====
  headerContainer: {
    padding: 16,
  },
  headerTitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  gameInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restartButtonContainer: {
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  restartButtonText: {
    textTransform: 'none',
    fontSize: 18,
    lineHeight: 20,
  },
  separator: {
    height: 10,
  },

  // ===== CARDS STYLES =====
  cardsContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
  },
  cityButtonContainer: {
    paddingVertical: 32,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cityButtonText: {
    fontSize: 18,
  },

  // ===== MODAL STYLES =====
  modalWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: COLORS.AppWhite,
    padding: 32,
    borderRadius: 24,
    width: '80%',

    alignItems: 'center',
  },
  mistakesText: {
    marginVertical: 16,
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
});
