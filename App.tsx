import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppButton from './src/primitives/AppButton';

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <AppButton title={'Hello'} onPress={() => {}} />
    </SafeAreaView>
  );
};

export default App;
