export enum WeatherStatus {
  SUNNY = "soleado",
  CLOUDY = "parcialmente nublado",
  STORMY = "nublado",
  RAINING = "lluvia",
  SNOWING = "nieve",
}

export type DailyTemperature = {
  minTemperature: number;
  maxTemperature: number;
};
