import { DailyTemperature } from "../model/weather-model.js";
import { WeeklyWeatherModel } from "../model/weekly-model.js";
import { calculateAverageTemperature } from "../utils/calculate-average-temperature.js";

export class WeeklyWeatherService {
  weekForecast: WeeklyWeatherModel;
  weekTemperatureData: DailyTemperature[];

  constructor(weeklyForecast: WeeklyWeatherModel) {
    this.weekForecast = weeklyForecast;
    this.weekTemperatureData = this.dailyTemperatureList;
  }

  private get dailyTemperatureList(): DailyTemperature[] {
    const weatherData = Object.values(this.weekForecast);

    return weatherData.map((dayData) => dayData.temperature);
  }

  public getMinTemperatureAverage(): number {
    const minTemperatureSum = this.weekTemperatureData
      .map((dailyTemperature) => dailyTemperature.minTemperature)
      .reduce((sum, dailyAverage) => sum + dailyAverage, 0);

    return Math.round(minTemperatureSum / this.weekTemperatureData.length);
  }

  public getMaxTemperatureAverage(): number {
    const maxTemperatureSum = this.weekTemperatureData
      .map((dailyTemperature) => dailyTemperature.maxTemperature)
      .reduce((sum, dailyAverage) => sum + dailyAverage, 0);

    return Math.round(maxTemperatureSum / this.weekTemperatureData.length);
  }

  public getTemperatureAverage(): number {
    const result = calculateAverageTemperature(
      this.getMinTemperatureAverage(),
      this.getMaxTemperatureAverage()
    );

    return Math.round(result);
  }
}
