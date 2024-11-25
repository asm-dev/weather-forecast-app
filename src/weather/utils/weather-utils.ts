import { DailyTemperature } from "../model";

export const calculateAverageTemperature = (
  minTemp: number,
  maxTemp: number
): number => (minTemp + maxTemp) / 2;
