import {IGetWeatherByCityNameResponse} from '@api/types';

/**
 * @desc remove specified count of non highest temperature cities
 * @param data - array of variants to filter
 * @param countToRemove - count of variants to remove
 * @return filtered array of cities
 */

export const fiftyFiftyHelp = (
  data: IGetWeatherByCityNameResponse[],
  countToRemove: number,
): IGetWeatherByCityNameResponse[] => {
  const highestTemperature = Math.max(...data.map(item => item.temperature));

  let removedCount = 0;

  const filteredData = data.filter(item => {
    if (item.temperature !== highestTemperature) {
      removedCount++;
      if (removedCount === countToRemove) {
        return true;
      }
      return false;
    }

    return true;
  });

  return filteredData;
};
