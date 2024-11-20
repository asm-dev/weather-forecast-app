import { WeatherStatus } from "./types";
import { Weather } from "./weather";

const todayWeather = new Weather(WeatherStatus.CLOUDY, {
  minTemperature: 15,
  maxTemperature: 30,
});
todayWeather.getAverageTemperature();
