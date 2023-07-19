export type IGetWeatherByCityNameResponse = {
  temperature: number;
  name: string;
};

export interface IGetSeveralCitiesWeatherResponse
  extends Array<IGetWeatherByCityNameResponse> {}
