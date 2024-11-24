import { WeatherStatus } from "./weather/model";
import { Weather } from "./weather/weather";

const todayWeather = new Weather({
  temperature: {
    minTemperature: 15,
    maxTemperature: 30,
  },
  weather: WeatherStatus.CLOUDY,
  windSpeed: 20,
});

todayWeather.getAverageTemperature();
