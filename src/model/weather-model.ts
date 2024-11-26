export enum WeatherStatus {
  SUNNY = "soleado",
  CLOUDY = "parcialmente nublado",
  STORMY = "nublado",
  RAINING = "lluvia",
  SNOWING = "nieve",
}

export type DailyTemperature = {
  minTemperature: number;
  maxTemperature: number;
};

export type WeatherModel = {
  weather: WeatherStatus;
  temperature: DailyTemperature;
  windSpeed: number;
};

export const createEmptyWeatherModel = (): WeatherModel => {
  return {
    weather: WeatherStatus.SUNNY,
    temperature: {
      minTemperature: 0,
      maxTemperature: 0,
    },
    windSpeed: 0,
  };
};
