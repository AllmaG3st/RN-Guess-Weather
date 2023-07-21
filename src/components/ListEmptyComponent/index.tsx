import {StyleSheet, View} from 'react-native';
import React from 'react';

import {AppText} from '@primitives';

type Props = {
  text: string;
};

const ListEmptyComponent: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.container}>
      <AppText
        centered
        fontFamily="CaprasimoRegular"
        fontSize="ExtraExtraLarge"
        color="EnglishViolet">
        {text}
      </AppText>
    </View>
  );
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
