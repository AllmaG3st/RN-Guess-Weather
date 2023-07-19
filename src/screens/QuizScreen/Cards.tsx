import React, {Key} from 'react';
import {View} from 'react-native';

import uuid from 'react-native-uuid';

import {IGameState} from '@context/types';
import QuizCard from '@components/QuizCard';
import AnimatedSkeleton from './AnimatedSkeleton';
import {IGetWeatherByCityNameResponse} from '@api/types';

import styles from './styles';

type Props = {
  loading: boolean;
  currentRoundVariants: IGetWeatherByCityNameResponse[];
  gameState: IGameState;
};

const Cards: React.FC<Props> = ({loading, gameState, currentRoundVariants}) => {
  if (loading) return <AnimatedSkeleton gameState={gameState} />;

  return (
    <View style={styles.cardsContainer}>
      {currentRoundVariants.map(({name, temperature}) => {
        return (
          <QuizCard
            key={uuid.v4() as Key}
            name={name}
            temperature={temperature}
          />
        );
      })}
    </View>
  );
};

export default Cards;
