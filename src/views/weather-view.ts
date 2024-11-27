import { WeatherModel, WeeklyWeatherModel } from "../model/weather-model.js";
import { capitalise } from "../utils/capitalise-first-char.js";

const fromWeatherDataToHTMLMap = (
  day: string,
  weatherData: WeatherModel
): string => {
  const capitalisedDay = capitalise(day);

  return `
    <div class="forecast-day">
      <h3>${capitalisedDay}</h3>
      <p>Clima: ${weatherData.weather}</p>
      <p>Temp: ${weatherData.temperature.minTemperature}°C - ${weatherData.temperature.maxTemperature}°C</p>
      <p>Viento: ${weatherData.windSpeed} km/h</p>
    </div>`;
};

export const renderWeeklyForecast = (weeklyData: WeeklyWeatherModel): void => {
  const weeklyDataList = Object.entries(weeklyData);

  const forecastContainer = document.getElementById("forecast-container");
  forecastContainer.innerHTML = "";

  forecastContainer.innerHTML = weeklyDataList
    .map(([day, weather]) => fromWeatherDataToHTMLMap(day, weather))
    .join("");
};
