import { WeeklyWeatherModel } from "../model";

export const renderWeeklyForecast = (weeklyData: WeeklyWeatherModel): void => {
  const days = Object.keys(weeklyData) as Array<keyof WeeklyWeatherModel>;
  const forecastContainer = document.getElementById("forecast-container");

  console.log("encuentro FORECAST CONTAINER -->", forecastContainer);

  forecastContainer.innerHTML = days
    .map((day) => {
      const { weather, temperature, windSpeed } = weeklyData[day];
      return `
        <div class="forecast-day">
          <h3>${day}</h3>
          <p>Clima: ${weather}</p>
          <p>Temp: ${temperature.minTemperature}°C - ${temperature.maxTemperature}°C</p>
          <p>Viento: ${windSpeed} km/h</p>
        </div>`;
    })
    .join("");
};
