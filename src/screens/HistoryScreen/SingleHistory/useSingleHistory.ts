import {useState} from 'react';

import {useSharedValue, withTiming} from 'react-native-reanimated';

import {IGameHistory} from '@store/types';

type Props = {
  gameHistory: IGameHistory;
};

const useSingleHistory = ({gameHistory}: Props) => {
  const [additionalInfo, setAdditionalInfo] = useState(false);

  const additionalInfoOpacity = useSharedValue(0);
  const containerHeight = useSharedValue(100);

  const toggleAdditionalInfo = () => {
    additionalInfoOpacity.value = withTiming(additionalInfo ? 0 : 1, {
      duration: 500,
    });
    containerHeight.value = withTiming(
      additionalInfo ? 100 : 100 + gameHistory.roundsHistory.length * 190,
      {
        duration: 500,
      },
    );

    setAdditionalInfo(prev => !prev);
  };

  return {
    additionalInfoOpacity,
    additionalInfo,
    containerHeight,
    toggleAdditionalInfo,
  };
};

export default useSingleHistory;
