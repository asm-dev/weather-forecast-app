import { WeatherStatus } from "../model/weather-model.js";
import { DaysOfTheWeek, WeeklyWeatherModel } from "../model/weekly-model.js";

export const generateRandomWeatherData = (): WeeklyWeatherModel => {
  const days = [
    DaysOfTheWeek.MONDAY,
    DaysOfTheWeek.TUESDAY,
    DaysOfTheWeek.WEDNESDAY,
    DaysOfTheWeek.THURSDAY,
    DaysOfTheWeek.FRIDAY,
    DaysOfTheWeek.SATURDAY,
    DaysOfTheWeek.SUNDAY,
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
