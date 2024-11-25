import { DailyTemperature } from "../model";

export const calculateAverageTemperature = (
  temperature: DailyTemperature
): number => (temperature.maxTemperature + temperature.minTemperature) / 2;
