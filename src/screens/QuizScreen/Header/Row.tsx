import React from 'react';
import {View} from 'react-native';

import {AppButton, AppText} from '@primitives';

import styles from '../styles';

type Props = {
  outerText: string | number;
  innerText: string;
  buttonTitle: string;
  disabled?: boolean;
  onButtonPress: () => void;
};

const Row: React.FC<Props> = ({
  outerText,
  innerText,
  buttonTitle,
  disabled,
  onButtonPress,
}) => {
  return (
    <View style={styles.gameInfo}>
      <AppText
        fontFamily="CaprasimoRegular"
        fontSize="ExtraLarge"
        color="Coral">
        {innerText}
        <AppText
          fontFamily="CaprasimoRegular"
          fontSize="ExtraLarge"
          color="EnglishViolet">
          {outerText}
        </AppText>
      </AppText>

      <AppButton
        title={buttonTitle}
        disabled={disabled ? disabled : false}
        containerStyle={styles.restartButtonContainer}
        textStyle={styles.restartButtonText}
        onPress={onButtonPress}
      />
    </View>
  );
};

export default Row;
