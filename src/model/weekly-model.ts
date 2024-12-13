import { WeatherModel } from "./weather-model.js";

export enum DaysOfTheWeek {
  MONDAY = "lunes",
  TUESDAY = "martes",
  WEDNESDAY = "miércoles",
  THURSDAY = "jueves",
  FRIDAY = "viernes",
  SATURDAY = "sábado",
  SUNDAY = "domingo",
}

export interface WeeklyWeatherModel {
  [DaysOfTheWeek.MONDAY]: WeatherModel;
  [DaysOfTheWeek.TUESDAY]: WeatherModel;
  [DaysOfTheWeek.WEDNESDAY]: WeatherModel;
  [DaysOfTheWeek.THURSDAY]: WeatherModel;
  [DaysOfTheWeek.FRIDAY]: WeatherModel;
  [DaysOfTheWeek.SATURDAY]: WeatherModel;
  [DaysOfTheWeek.SUNDAY]: WeatherModel;
}
