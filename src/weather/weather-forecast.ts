import { WeatherStatus, DailyTemperature, WeatherModel } from "./model";

export class WeatherForecast {
  weather: WeatherStatus;
  temperature: DailyTemperature;
  windSpeed: number;

  constructor(weatherData: WeatherModel) {
    const { weather, temperature, windSpeed } = weatherData;
    this.weather = weather;
    this.temperature = temperature;
    this.windSpeed = windSpeed;
  }

  public static getAverageDailyTemperature(
    temperatureData: DailyTemperature
  ): number {
    return (
      (temperatureData.maxTemperature + temperatureData.minTemperature) / 2
    );
  }
}
