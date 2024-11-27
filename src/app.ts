import {
  createEmptyWeatherModel,
  WeeklyWeatherModel,
} from "./model/weather-model.js";
import { WeeklyWeatherForecastService } from "./service/weekly-weather-forecast-service.js";
import { renderWeeklyForecast } from "./views/weather-view.js";
import { WeatherForecast } from "./weather-forecast.js";

const createDailyForecastMock = (minTemp: number, maxTemp: number) => {
  return {
    ...createEmptyWeatherModel(),
    temperature: {
      minTemperature: minTemp,
      maxTemperature: maxTemp,
    },
  };
};

const WEEKLY_WEATHER_MODEL_MOCK: WeeklyWeatherModel = {
  monday: createDailyForecastMock(5, 10),
  tuesday: createDailyForecastMock(5, 12),
  wednesday: createDailyForecastMock(7, 13),
  thursday: createDailyForecastMock(5, 9),
  friday: createDailyForecastMock(10, 10),
  saturday: createDailyForecastMock(5, 8),
  sunday: createDailyForecastMock(8, 9),
};

const WEEKLY_WEATHER_FORECAST_MOCK: WeeklyWeatherForecastService =
  new WeeklyWeatherForecastService(WEEKLY_WEATHER_MODEL_MOCK);

const DAILY_WEATHER_FORECAST_MOCK: WeatherForecast = new WeatherForecast(
  createDailyForecastMock(5, 10)
);

document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "Media diaria del lunes:",
    Math.round(DAILY_WEATHER_FORECAST_MOCK.getAverageDailyTemperature())
  );
  console.log(
    "Temperatura media de la semana:",
    Math.round(WEEKLY_WEATHER_FORECAST_MOCK.getTemperatureAverage())
  );
  console.log(
    "Media de las temperaturas mínimas de la semana:",
    Math.round(WEEKLY_WEATHER_FORECAST_MOCK.getMinTemperatureAverage())
  );
  console.log(
    "Media de las temperaturas máximas de la semana:",
    Math.round(WEEKLY_WEATHER_FORECAST_MOCK.getMaxTemperatureAverage())
  );
  renderWeeklyForecast(WEEKLY_WEATHER_MODEL_MOCK);
});
