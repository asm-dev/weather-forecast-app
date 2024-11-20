//TODO: weather enum

class Weather {
  constructor(temperature, weather) {
    this.minTemperature = temperature.min;
    this.maxTemperature = temperature.max;
    this.weather = weather;
  }

  getAverageTemperature() {
    console.log(
      `La temperatura media es: ${
        (this.minTemperature + this.maxTemperature) / 2
      }`
    );
  }
}

const weatherObject = new Weather({ min: 15, max: 30 }, "sol");
weatherObject.getAverageTemperature();
