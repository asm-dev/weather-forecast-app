import {
  WeatherStatus,
  DailyTemperature,
  WeatherModel,
} from "./model/weather-model";
import { calculateAverageTemperature } from "./utils/calculate-average-temperature";

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

  public getAverageDailyTemperature(): number {
    return calculateAverageTemperature(
      this.temperature.minTemperature,
      this.temperature.maxTemperature
    );
  }
}
