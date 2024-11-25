import { WeatherStatus } from "./weather/model";
import { Weather } from "./weather/weather";

const TODAY_WEATHER_MOCK = new Weather({
  temperature: {
    minTemperature: 15,
    maxTemperature: 30,
  },
  weather: WeatherStatus.CLOUDY,
  windSpeed: 20,
});

const YESTERDAY_WEATHER_MOCK: Weather = new Weather({
  temperature: {
    minTemperature: 5,
    maxTemperature: 10,
  },
  weather: WeatherStatus.SUNNY,
  windSpeed: 20,
});

const WEATHER_DATA_MOCK: Weather[] = [
  TODAY_WEATHER_MOCK,
  YESTERDAY_WEATHER_MOCK,
];

const dailyAverage: number = Weather.getAverageDailyTemperature(
  TODAY_WEATHER_MOCK.temperature
);
const totalAverage: number = Weather.getAverageTemperatureFromList(
  WEATHER_DATA_MOCK.map((dailyData) => dailyData.temperature)
);

console.log("Media diaria del día:", dailyAverage);
console.log("Media del total de días:", totalAverage);
