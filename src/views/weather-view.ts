import { WeatherModel, WeeklyWeatherModel } from "../model/weather-model.js";
import { capitalise } from "../utils/capitalise-first-char.js";
import { generateRandomWeatherData } from "../utils/generate-random-weather-data.js";

export const renderWeeklyForecast = (weeklyData: WeeklyWeatherModel): void => {
  const mainContainer = document.getElementById("forecast-container");
  const week = createDIV();
  const cards = createDIV();

  if (!hasAddbutton) {
    createAddbutton(mainContainer);
  }

  week.classList.add("weekly-weather-container");
  cards.innerHTML = fromDataToWeeklyWeatherCardHTML(weeklyData);

  createDeletebutton(cards, week);
  week.appendChild(cards);
  mainContainer.appendChild(week);
};

const fromDataToWeeklyWeatherCardHTML = (
  weeklyData: WeeklyWeatherModel
): string => {
  const weeklyDataList = Object.entries(weeklyData);

  return weeklyDataList
    .map(([day, weather]) => createDailyWeatherCard(day, weather))
    .join("");
};

const createDailyWeatherCard = (day: string, weatherData: WeatherModel) => {
  const capitalisedDay = capitalise(day);

  return `
    <div class="daily-forecast-card">
      <h3>${capitalisedDay}</h3>
      <p>Clima: ${weatherData.weather}</p>
      <p>Temperatura: ${weatherData.temperature.minTemperature}°C - ${weatherData.temperature.maxTemperature}°C</p>
      <p>Viento: ${weatherData.windSpeed} km/h</p>
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

const createAddbutton = (parentContainer: HTMLElement): void => {
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

const hasAddbutton = (): boolean =>
  document.getElementsByClassName("add-week-button").length !== 0;

const createDIV = (): HTMLDivElement => document.createElement("div");
