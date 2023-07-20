import React, {Key, useEffect} from 'react';
import {View} from 'react-native';

import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import uuid from 'react-native-uuid';

import {COLORS} from '@constants/colors';
import {IGameState} from '@context/types';

import styles from './styles';

type Props = {
  gameState: IGameState;
};

const AnimatedSkeleton: React.FC<Props> = ({gameState}) => {
  const containers = new Array(gameState.variants).fill(0);

  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.2, {duration: 700}), -1, true);
  }, [opacity]);

  return (
    <View style={styles.cardsContainer}>
      {containers.map(() => (
        <Animated.View
          key={uuid.v4() as Key}
          style={[
            styles.cityButtonContainer,
            {backgroundColor: COLORS.LightGray, opacity},
          ]}
        />
      ))}
    </View>
  );
};

export default AnimatedSkeleton;
