import React, {memo} from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  PressableProps,
  Text,
  TextStyle,
} from 'react-native';

import Animated, {
  AnimatedStyleProp,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props extends PressableProps {
  title: string | number;
  containerStyle?: AnimatedStyleProp<PressableProps['style']>;
  textStyle?: TextStyle;
  loading?: boolean;
  type?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
}

const AppButton: React.FC<Props> = ({
  title,
  onPressIn,
  onPressOut,
  containerStyle,
  textStyle,
  type = 'PRIMARY',
  disabled,
  loading = false,
  ...props
}) => {
  const opacity = useSharedValue(1);

  const _onPressIn: Props['onPressIn'] = event => {
    onPressIn?.(event);
    opacity.value = withTiming(0.5, {duration: 300});
  };

  const _onPressOut: Props['onPressOut'] = event => {
    onPressOut?.(event);
    opacity.value = withTiming(1, {duration: 300});
  };

  return (
    <AnimatedPressable
      android_ripple={{color: 'rgba(255, 255, 255, 0.1)', foreground: true}}
      style={[
        styles.container,
        styles[`container_${type}`],
        Platform.OS === 'ios' && {opacity: disabled ? 0.3 : opacity},
        disabled && {opacity: 0.3},
        containerStyle,
      ]}
      disabled={disabled}
      onPressIn={_onPressIn}
      onPressOut={_onPressOut}
      {...props}>
      {loading ? (
        <ActivityIndicator size={'small'} />
      ) : (
        <Text style={[styles.text, styles[`text_${type}`], textStyle]}>
          {title}
        </Text>
      )}
    </AnimatedPressable>
  );
};

export default memo(AppButton);
