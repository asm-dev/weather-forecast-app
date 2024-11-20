import { WeatherStatus, DailyTemperature } from "./types";

export class Weather {
  minTemperature: number;
  maxTemperature: number;
  weather: WeatherStatus;

  constructor(weather: WeatherStatus, temperature: DailyTemperature) {
    this.minTemperature = temperature.minTemperature;
    this.maxTemperature = temperature.maxTemperature;
    this.weather = weather;
  }

  getAverageTemperature(): void {
    console.log(
      `La temperatura media es: ${
        (this.minTemperature + this.maxTemperature) / 2
      }`
    );
  }
}
