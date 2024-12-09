import { WeatherModel, WeeklyWeatherModel } from "../model/weather-model.js";
import { WeeklyWeatherService } from "../service/week-weather-data-service.js";
import { capitalise } from "../utils/capitalise-first-char.js";
import { generateRandomWeatherData } from "../utils/generate-random-weather-data.js";
import { Weather } from "../weather.js";

export const renderWeeklyForecast = (weeklyData: WeeklyWeatherModel): void => {
  const mainContainer = document.getElementById("forecast-container");
  const week = createDIV();
  const cards = generateWeekHTML(weeklyData);
  const footer = createDIV();

  if (!hasAddButton()) {
    createAddButton(mainContainer);
  }

  week.innerHTML = cards;
  week.classList.add("weekly-weather-container");

  createDeletebutton(footer, week);

  week.appendChild(footer);
  mainContainer.appendChild(week);
};

const generateWeekHTML = (weeklyData: WeeklyWeatherModel): string => {
  const weeklyDataList = Object.entries(weeklyData);
  const service = new WeeklyWeatherService(weeklyData);
  const temperatureAvg = service.getTemperatureAverage();

  return weeklyDataList
    .map(([day, weather]) => createDailyWeatherCard(day, weather))
    .join("").concat(`
      <div class="avg-temperature">
        <p>Temperatura media: ${temperatureAvg}°C</p>
      </div>`);
};

const createDailyWeatherCard = (
  day: string,
  weatherData: WeatherModel
): string => {
  const capitalisedDay = capitalise(day);
  const averageTemperature = new Weather(
    weatherData
  ).getAverageDailyTemperature();

  return `
    <div class="daily-forecast-card">
      <h3>${capitalisedDay}</h3>
      <article>
        <p>Clima: ${weatherData.weather}</p>
        <p>Temperatura: 
          <ul>
            <li>Mínima: ${weatherData.temperature.minTemperature}°C</li>
            <li>Máxima: ${weatherData.temperature.maxTemperature}°C</li>
            <li>Media: ${averageTemperature}°C</li>
          </ul>
        <p>Viento: ${weatherData.windSpeed} km/h</p>
      </article>
    </div>`;
};

const createDeletebutton = (
  parentContainer: HTMLElement,
  affectedWeek: HTMLDivElement
): void => {
  const button = document.createElement("button");
  button.textContent = "Borrar semana";
  button.classList.add("delete-week-button");
  button.addEventListener("click", () => deleteWeek(affectedWeek));
  parentContainer.appendChild(button);
};

const createAddButton = (parentContainer: HTMLElement): void => {
  const button = document.createElement("button");
  button.textContent = "Agregar nueva semana";
  button.classList.add("add-week-button");
  button.addEventListener("click", () => addRandomWeek());
  parentContainer.appendChild(button);
};

const deleteWeek = (weekContainer: HTMLDivElement): void => {
  const forecastContainer = document.getElementById("forecast-container");
  forecastContainer.removeChild(weekContainer);
};

const addRandomWeek = (): void => {
  const randomWeekData = generateRandomWeatherData();
  renderWeeklyForecast(randomWeekData);
};

const hasAddButton = (): boolean =>
  document.getElementsByClassName("add-week-button").length !== 0;

const createDIV = (): HTMLDivElement => document.createElement("div");
