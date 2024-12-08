import { WeatherStatus, WeeklyWeatherModel } from "../model/weather-model.js";

export const generateRandomWeatherData = (): WeeklyWeatherModel => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const randomWeather = [
    WeatherStatus.SUNNY,
    WeatherStatus.CLOUDY,
    WeatherStatus.RAINING,
    WeatherStatus.STORMY,
    WeatherStatus.SNOWING,
  ];

  return days.reduce((acc, day) => {
    acc[day] = {
      weather: randomWeather[Math.floor(Math.random() * randomWeather.length)],
      temperature: {
        minTemperature: Math.floor(Math.random() * 20 - 10),
        maxTemperature: Math.floor(Math.random() * 20 + 10),
      },
      windSpeed: Math.floor(Math.random() * 30),
    };
    return acc;
  }, {} as WeeklyWeatherModel);
};
