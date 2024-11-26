import { WeatherModel } from "./weather-model";

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
  monday: WeatherModel;
  tuesday: WeatherModel;
  wednesday: WeatherModel;
  thursday: WeatherModel;
  friday: WeatherModel;
  saturday: WeatherModel;
  sunday: WeatherModel;
}
