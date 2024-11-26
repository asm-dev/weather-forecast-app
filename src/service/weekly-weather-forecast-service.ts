import { DailyTemperature } from "../model/weather-model";
import { WeeklyWeatherModel } from "../model/weekly-weather-model";
import { calculateAverageTemperature } from "../utils/calculate-average-temperature";

export class WeeklyWeatherForecastService {
  forecastData: WeeklyWeatherModel;
  temperatureData: DailyTemperature[];

  constructor(weeklyForecast: WeeklyWeatherModel) {
    this.forecastData = weeklyForecast;
    this.temperatureData = this.dailyTemperatureList;
  }

  private get dailyTemperatureList(): DailyTemperature[] {
    const weatherData = Object.values(this.forecastData);

    return weatherData.map((dailyForecast) => dailyForecast.temperature);
  }

  public getMinTemperatureAverage(): number {
    const minTemperatureSum = this.temperatureData
      .map((dailyTemperature) => dailyTemperature.minTemperature)
      .reduce((sum, dailyAverage) => sum + dailyAverage, 0);

    return minTemperatureSum / this.temperatureData.length;
  }

  public getMaxTemperatureAverage(): number {
    const maxTemperatureSum = this.temperatureData
      .map((dailyTemperature) => dailyTemperature.maxTemperature)
      .reduce((sum, dailyAverage) => sum + dailyAverage, 0);

    return maxTemperatureSum / this.temperatureData.length;
  }

  public getTemperatureAverage(): number {
    return calculateAverageTemperature(
      this.getMinTemperatureAverage(),
      this.getMaxTemperatureAverage()
    );
  }
}
