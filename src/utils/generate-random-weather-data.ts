import { WeatherStatus, WeeklyWeatherModel } from "../model/weather-model.js";

export const generateRandomWeatherData = (): WeeklyWeatherModel => {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
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
