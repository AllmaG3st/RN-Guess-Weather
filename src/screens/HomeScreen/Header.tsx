import {Text, View} from 'react-native';
import React from 'react';
import Animated, {SharedValue} from 'react-native-reanimated';
import styles from './styles';
import {AppButton, AppText} from '@primitives';

type Props = {
  headerTextOpacity: SharedValue<number>;
  onReviewHistoryPress: () => void;
};

const AnimatedText = Animated.createAnimatedComponent(Text);

const Header: React.FC<Props> = ({headerTextOpacity, onReviewHistoryPress}) => {
  return (
    <View style={styles.headerContainer}>
      <AnimatedText style={[styles.headerText, {opacity: headerTextOpacity}]}>
        Choose Difficulty
      </AnimatedText>
      <AppText
        fontSize="MegaLarge"
        color="EnglishViolet"
        fontFamily="CaprasimoRegular">
        or
      </AppText>

      <AppButton
        type="SECONDARY"
        title="Review History"
        containerStyle={styles.historyButton}
        onPress={onReviewHistoryPress}
      />
    </View>
  );
};

export default Header;
