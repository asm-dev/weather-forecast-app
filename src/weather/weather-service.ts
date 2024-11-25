import { WeatherStatus, DailyTemperature, WeatherModel } from "./model";
import { Weather } from "./weather-forecast";

export class WeatherService {
  forecastData: Weather[];
  temperatureData: DailyTemperature[] = [];

  constructor(weatherData: Weather[]) {
    this.forecastData = weatherData;
    this.temperatureData = [];
  }
  // TODO: fill temperature data on init

  public static getAverageTemperatureFromList(
    data: DailyTemperature[]
  ): number {
    const averageTemperaturesList = data.map(
      Weather.getAverageDailyTemperature
    );
    const totalDays = data.length;
    const temperatureSum = averageTemperaturesList.reduce(
      (sum, dailyAverage) => sum + dailyAverage,
      0
    );

    return temperatureSum / totalDays;
  }
}
