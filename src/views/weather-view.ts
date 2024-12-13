import { WeatherModel } from "../model/weather-model.js";
import { WeeklyWeatherModel } from "../model/weekly-model.js";
import { WeeklyWeatherService } from "../service/week-weather-data-service.js";
import { capitalise } from "../utils/capitalise-first-char.js";
import { generateRandomWeatherData } from "../utils/generate-random-weather-data.js";
import { getWeatherEmoji } from "../utils/get-weather-emoji.js";
import { Weather } from "../weather.js";

export const renderWeeklyForecast = (weeklyData: WeeklyWeatherModel): void => {
  const mainContainer = document.getElementById("forecast-container");
  const week = createDIV();
  const footer = createDIV();
  week.classList.add("weekly-weather-container");
  footer.classList.add("week-footer");

  if (!hasAddButton()) {
    renderAddButton(mainContainer);
  }

  week.innerHTML = getWeekHTML(weeklyData);
  renderAvgTemperatureData(footer, weeklyData);
  renderDeletebutton(footer, week);
  week.appendChild(footer);
  mainContainer.appendChild(week);
};

const getWeekHTML = (weeklyData: WeeklyWeatherModel): string => {
  return `
    <div class="daily-weather-cards">
      ${Object.entries(weeklyData)
        .map(([day, weather]) => createDailyWeatherCard(day, weather))
        .join("")}
    </div>`;
};

const createDailyWeatherCard = (
  day: string,
  weatherData: WeatherModel
): string => {
  const capitalisedDay = capitalise(day);
  const weatherEmoji = getWeatherEmoji(weatherData.weather);
  const averageTemperature = new Weather(
    weatherData
  ).getAverageDailyTemperature();

  return `
    <div class="daily-forecast-card">
      <header>
        <h3>${capitalisedDay} ${weatherEmoji}</h3>
      </header>
      <main>
        <p><span>Clima:</span> ${weatherData.weather}</p>
        <p><span>Temperatura:</span> 
          <ul>
            <li>Mínima: ${weatherData.temperature.minTemperature}°C</li>
            <li>Máxima: ${weatherData.temperature.maxTemperature}°C</li>
            <li>Media: ${averageTemperature}°C</li>
          </ul>
        </p>
        <p><span>Viento:</span> ${weatherData.windSpeed} km/h</p>
      </main>
    </div>`;
};

const renderAvgTemperatureData = (
  parentContainer: HTMLElement,
  weeklyData: WeeklyWeatherModel
): void => {
  const service = new WeeklyWeatherService(weeklyData);
  const temperatureAvg = service.getTemperatureAverage();
  const container = createDIV();
  container.classList.add("avg-temperature");
  container.innerHTML = `<p>Temperatura media: ${temperatureAvg}°C</p>`;
  parentContainer.appendChild(container);
};

const renderDeletebutton = (
  parentContainer: HTMLElement,
  affectedWeek: HTMLDivElement
): void => {
  const container = createDIV();
  const button = document.createElement("button");
  button.textContent = "Borrar semana";
  button.classList.add("delete-week-button");
  button.addEventListener("click", () => deleteWeek(affectedWeek));
  container.appendChild(button);
  parentContainer.appendChild(container);
};

const renderAddButton = (parentContainer: HTMLElement): void => {
  const container = createDIV();
  const button = document.createElement("button");
  button.textContent = "Agregar semana";
  button.classList.add("add-week-button");
  container.classList.add("add-week-container");
  button.addEventListener("click", () => addRandomWeek());
  container.appendChild(button);
  parentContainer.appendChild(container);
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
