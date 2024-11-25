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

  public static getAverageDailyTemperature(
    temperatureData: DailyTemperature
  ): number {
    return (
      (temperatureData.maxTemperature + temperatureData.minTemperature) / 2
    );
  }

  public static getAverageTemperatureFromList(
    data: DailyTemperature[]
  ): number {
    const averageTemperaturesList = data.map(this.getAverageDailyTemperature);
    const totalDays = data.length;
    const temperatureSum = averageTemperaturesList.reduce(
      (sum, dailyAverage) => sum + dailyAverage,
      0
    );

    return temperatureSum / totalDays;
  }
}
