import React, {Key, memo} from 'react';
import {View} from 'react-native';

import uuid from 'react-native-uuid';

import useCards from './useCards';
import {QuizCardRef} from '../types';
import {QuizCard} from '@components';
import {IGameState} from '@store/types';
import AnimatedSkeleton from '../AnimatedSkeleton';

import styles from '../styles';

type Props = {
  gameState: IGameState;
};

const Cards: React.FC<Props> = ({gameState}) => {
  const {loading, currentRoundVariants, cardRefs, rotateAllCards} = useCards();

  if (loading) return <AnimatedSkeleton gameState={gameState} />;

  return (
    <View style={styles.cardsContainer}>
      {currentRoundVariants.map(({name, temperature}, index) => {
        return (
          <QuizCard
            ref={(cardRef: QuizCardRef) => (cardRefs.current[index] = cardRef)}
            rotateAllCards={rotateAllCards}
            key={uuid.v4() as Key}
            index={index}
            name={name}
            temperature={temperature}
          />
        );
      })}
    </View>
  );
};

export default memo(Cards);
