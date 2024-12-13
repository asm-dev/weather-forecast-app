import { WeatherStatus } from "../model/weather-model.js";

const weatherMap: { [key in WeatherStatus]: string } = {
  [WeatherStatus.SUNNY]: "☀️",
  [WeatherStatus.CLOUDY]: "⛅",
  [WeatherStatus.STORMY]: "⛈️",
  [WeatherStatus.RAINING]: "🌧️",
  [WeatherStatus.SNOWING]: "❄️",
};

export const getWeatherEmoji = (weather: string): string => {
  return weatherMap[weather.toLowerCase()] || "🌈";
};
