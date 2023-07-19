import ApiClient from '@api';
import {
  IGetSeveralCitiesWeatherResponse,
  IGetWeatherByCityNameResponse,
} from './types';

export const getWeatherByCityName = async (
  cityName: string,
): Promise<IGetWeatherByCityNameResponse> => {
  const response = await ApiClient.get(`/weather?q=${cityName}`);

  return {
    temperature: response.data.main.temp,
    name: response.data.name,
  };
};

export const getSeveralCitiesWeather = async (
  cityNames: string[],
): Promise<IGetSeveralCitiesWeatherResponse> => {
  const citiesWeatherData = await Promise.all(
    cityNames.map(async cityName => {
      const response = await getWeatherByCityName(cityName);
      return response;
    }),
  );

  return citiesWeatherData;
};
