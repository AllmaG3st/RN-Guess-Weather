import {useCallback, useEffect} from 'react';
import {useSharedValue, withRepeat, withTiming} from 'react-native-reanimated';

const useHomeScreen = () => {
  const headerTextOpacity = useSharedValue(1);

  const toggleTextOpacity = useCallback(() => {
    headerTextOpacity.value = withRepeat(
      withTiming(0.4, {duration: 500}),
      -1,
      true,
    );
  }, [headerTextOpacity]);

  useEffect(() => {
    toggleTextOpacity();
  }, [toggleTextOpacity]);

  return {headerTextOpacity};
};

export default useHomeScreen;
