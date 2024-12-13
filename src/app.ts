import { WeeklyWeatherModel } from "./model/weekly-model.js";
import { generateRandomWeatherData } from "./utils/generate-random-weather-data.js";
import { renderWeeklyForecast } from "./views/weather-view.js";

const WEEKLY_WEATHER_MODEL_MOCK: WeeklyWeatherModel = {
  ...generateRandomWeatherData(),
};

document.addEventListener("DOMContentLoaded", () => {
  renderWeeklyForecast(WEEKLY_WEATHER_MODEL_MOCK);

  console.log("Welcome to our Weather Forecast App, we hope you enjoy it!");
});
