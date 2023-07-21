import {Text, View} from 'react-native';
import React, {Key, memo, useState} from 'react';

import uuid from 'react-native-uuid';
import {format, parseISO} from 'date-fns';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';

import {COLORS} from '@constants/colors';
import {IGameHistory} from '@store/types';
import {AppButton, AppText} from '@primitives';
import AppSeparator from '@primitives/AppSeparator';

import styles from './styles';

type Props = {
  gameHistory: IGameHistory;
};

//TODO: Refactor this component

const SingleHistory: React.FC<Props> = ({gameHistory}) => {
  const additionalInfoOpacity = useSharedValue(0);

  const [additionalInfo, setAdditionalInfo] = useState(false);

  const toggleAdditionalInfo = () => {
    additionalInfoOpacity.value = withTiming(additionalInfo ? 0 : 1, {
      duration: 500,
    });

    setAdditionalInfo(prev => !prev);
  };

  return (
    <View style={styles.historyContainer}>
      <View style={styles.gameGeneralInfo}>
        <View>
          <AppText
            fontFamily="CaprasimoRegular"
            fontSize="Large"
            color="EnglishViolet">
            Date: {format(parseISO(gameHistory.date), 'MMMM dd, HH:mm')}
          </AppText>

          <AppText
            fontFamily="CaprasimoRegular"
            fontSize="Large"
            color="EnglishViolet">
            <Text
              style={{color: gameHistory.game_won ? COLORS.Green : COLORS.Red}}>
              Outcome: {gameHistory.game_won ? 'Won' : 'Lost'}
            </Text>
          </AppText>

          <AppText
            fontFamily="CaprasimoRegular"
            fontSize="Large"
            color="EnglishViolet">
            Complexity:{' '}
            {gameHistory.difficulty?.charAt(0).toUpperCase() +
              gameHistory.difficulty?.slice(1)}
          </AppText>
        </View>

        <AppButton
          title={'Reveal'}
          type="TERTIARY"
          onPress={toggleAdditionalInfo}
        />
      </View>

      {additionalInfo && (
        <Animated.View style={{opacity: additionalInfoOpacity}}>
          <AppSeparator style={styles.separator} />
          {gameHistory.roundsHistory.map((round, index) => {
            return (
              <View key={index} style={{marginBottom: 20}}>
                <AppText
                  fontFamily="CaprasimoRegular"
                  fontSize="ExtraExtraLarge"
                  color="EnglishViolet"
                  style={styles.marginBetween}>
                  Round #: {index + 1}
                </AppText>

                <View style={styles.marginBetween}>
                  <AppText
                    fontFamily="CaprasimoRegular"
                    fontSize="Large"
                    color="EnglishViolet">
                    Variants:
                  </AppText>
                  {round.variants.map((variant, index) => {
                    return (
                      <AppText
                        key={uuid.v4() as Key}
                        fontFamily="CaprasimoRegular"
                        fontSize="Medium"
                        color="Coral">
                        {index + 1}: {variant.name} {variant.temperature}
                      </AppText>
                    );
                  })}
                </View>

                <AppText
                  fontFamily="CaprasimoRegular"
                  fontSize="Large"
                  color="EnglishViolet"
                  style={styles.marginBetween}>
                  Correct Answer: {round.correctAnswer.name}{' '}
                  {round.correctAnswer.temperature}
                </AppText>

                <AppText
                  fontFamily="CaprasimoRegular"
                  fontSize="Large"
                  color={round.isCorrect ? 'Green' : 'Red'}>
                  Your Answer: {round.correctAnswer.name}{' '}
                  {round.correctAnswer.temperature}
                </AppText>
              </View>
            );
          })}
        </Animated.View>
      )}
    </View>
  );
};

export default memo(SingleHistory);
