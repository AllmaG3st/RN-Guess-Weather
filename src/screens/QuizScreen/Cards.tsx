import React, {Key} from 'react';
import {View} from 'react-native';

import uuid from 'react-native-uuid';

import {QuizCardRef} from './types';
import {IGameState} from '@context/types';
import QuizCard from '@components/QuizCard';
import AnimatedSkeleton from './AnimatedSkeleton';
import {IGetWeatherByCityNameResponse} from '@api/types';

import styles from './styles';

type Props = {
  loading: boolean;
  gameState: IGameState;
  currentRoundVariants: IGetWeatherByCityNameResponse[];
  cardRefs: React.MutableRefObject<QuizCardRef[]>;
  rotateAllCards: () => void;
};

const Cards: React.FC<Props> = ({
  loading,
  gameState,
  currentRoundVariants,
  cardRefs,
  rotateAllCards,
}) => {
  if (loading) return <AnimatedSkeleton gameState={gameState} />;

  return (
    <View style={styles.cardsContainer}>
      {currentRoundVariants.map(({name, temperature}, index) => {
        return (
          <QuizCard
            ref={(cardRef: QuizCardRef) => (cardRefs.current[index] = cardRef)}
            rotateAllCards={rotateAllCards}
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
