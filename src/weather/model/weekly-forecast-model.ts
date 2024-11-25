import { WeatherForecast } from "../weather-forecast";

export enum DaysOfTheWeek {
  MONDAY = "lunes",
  TUESDAY = "martes",
  WEDNESDAY = "miércoles",
  THURSDAY = "jueves",
  FRIDAY = "viernes",
  SATURDAY = "sábado",
  SUNDAY = "domingo",
}

export enum Week {
  numberOfDays = "7",
}

export interface WeeklyForecastModel {
  monday: WeatherForecast;
  tuesday: WeatherForecast;
  wednesday: WeatherForecast;
  thursday: WeatherForecast;
  friday: WeatherForecast;
  saturday: WeatherForecast;
  sunday: WeatherForecast;
}
