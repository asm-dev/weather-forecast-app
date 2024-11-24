import { WeatherStatus, DailyTemperature, WeatherModel } from "./model";

export class Weather {
  weather: WeatherStatus;
  temperature: DailyTemperature;
  windSpeed: number;

  constructor(weatherData: WeatherModel) {
    const { weather, temperature, windSpeed } = weatherData;
    this.weather = weather;
    this.temperature = temperature;
    this.windSpeed = windSpeed;
  }

  getAverageTemperature(): number {
    const average =
      (this.temperature.minTemperature + this.temperature.maxTemperature) / 2;
    console.log(`La temperatura media es: ${average}`);

    return average;
  }
}
