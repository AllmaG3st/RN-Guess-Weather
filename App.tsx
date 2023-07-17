import {SafeAreaView} from 'react-native';
import React from 'react';

import {FONTS} from '@constants/fonts';
import {AppButton, AppText} from '@primitives';

const App = () => {
  return (
    <SafeAreaView>
      <AppText style={{fontFamily: FONTS.CaprasimoRegular}}>Aleko</AppText>
      <AppButton title={'Hello'} onPress={() => {}} />
    </SafeAreaView>
  );
};

export default App;
