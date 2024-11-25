import { DailyTemperature } from "../model";
import { calculateAverageTemperature } from "../utils";
import { WeatherForecast } from "../weather-forecast";

export class WeatherForecastService {
  forecastData: WeatherForecast[];
  temperatureData: DailyTemperature[];

  constructor(weatherForecastData: WeatherForecast[]) {
    this.forecastData = weatherForecastData;
    this.temperatureData = this.dailyTemperatureList;
  }

  private get dailyTemperatureList(): DailyTemperature[] {
    return this.forecastData.map((dailyForecast) => dailyForecast.temperature);
  }

  public getAverageTemperature(): number {
    const temperatureSum = this.temperatureData
      .map(calculateAverageTemperature)
      .reduce((sum, dailyAverage) => sum + dailyAverage, 0);

    return temperatureSum / this.temperatureData.length;
  }
}
