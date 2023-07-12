import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_PRIMARY: {
    backgroundColor: 'green',
  },
  container_SECONDARY: {
    borderColor: 'green',
    borderWidth: 3,
  },

  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  text_PRIMARY: {
    color: 'red',
  },
  text_SECONDARY: {
    color: 'green',
  },
});
