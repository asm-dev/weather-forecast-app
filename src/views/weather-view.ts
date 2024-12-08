import { WeatherModel, WeeklyWeatherModel } from "../model/weather-model.js";
import { capitalise } from "../utils/capitalise-first-char.js";
import { generateRandomWeatherData } from "../utils/generate-random-weather-data.js";

let weekCounter = 1;

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

const fromDataToWeeklyWeatherCardHTML = (
  weeklyData: WeeklyWeatherModel
): string => {
  const weeklyDataList = Object.entries(weeklyData);

  return weeklyDataList
    .map(([day, weather]) => createDailyWeatherCard(day, weather))
    .join("");
};

export const renderWeeklyForecast = (
  weeklyData: WeeklyWeatherModel,
  weekNumber: string
): void => {
  const forecastContainer = document.getElementById("forecast-container");

  const weekContainer = document.createElement("div");
  weekContainer.classList.add("weekly-weather-container");
  weekContainer.dataset.week = weekNumber;

  const weekHeader = document.createElement("h2");
  weekHeader.textContent = `Semana núm. ${weekNumber}`;
  weekContainer.appendChild(weekHeader);

  const cardsContainer = document.createElement("div");
  cardsContainer.innerHTML = fromDataToWeeklyWeatherCardHTML(weeklyData);
  weekContainer.appendChild(cardsContainer);

  const buttonContainer = document.createElement("div");
  weekContainer.classList.add("buttons-container");

  const addButton = document.createElement("button");
  addButton.textContent = "Agregar nueva semana";
  addButton.addEventListener("click", () => {
    const newWeekData = generateRandomWeatherData();
    renderWeeklyForecast(newWeekData, (++weekCounter).toString());
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Borrar semana";
  deleteButton.addEventListener("click", () => deleteWeek(weekContainer));

  buttonContainer.appendChild(addButton);
  buttonContainer.appendChild(deleteButton);
  weekContainer.appendChild(buttonContainer);

  forecastContainer.appendChild(weekContainer);
};

const deleteWeek = (weekContainer: HTMLDivElement): void => {
  const forecastContainer = document.getElementById("forecast-container");
  forecastContainer.removeChild(weekContainer);

  weekCounter--;
  updateWeekHeaders();
};

const updateWeekHeaders = () => {
  const weekContainerNodeList = document.querySelectorAll(
    ".weekly-weather-container"
  );

  weekContainerNodeList.forEach((week, index) => {
    const weekHeader = week.querySelector("h2");
    weekHeader.textContent = `Semana ${index + 1}`;
    (week as HTMLElement).dataset.week = (index + 1).toString();
  });

  weekCounter = weekContainerNodeList.length;
};
