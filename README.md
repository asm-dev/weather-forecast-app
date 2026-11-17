# Weather App - Weekly Forecast

This application shows weather data for a week using JS with TypeScript. The app uses service logic to calculate averages and renders the information in the DOM through a simple interface.

&nbsp;

## Running the app

1. Install dependencies with `npm install`
2. Start the application with `npm run launch`
3. Open the page in your browser. It opens automatically with live-server at `http://127.0.0.1:8080`

&nbsp;

## Main features

- **Data display and calculation**: shows detailed data, including maximum and minimum temperatures, wind speed and weather conditions (sunny, cloudy, rain, etc.), and is able to calculate both daily and weekly average temperatures.
- **DOM manipulation**: the weather data is rendered dynamically.
- **Scalability and maintainability**: it uses service logic and a modular design. This organization allows responsibilities to be isolated, which makes both extending and maintaining the application easier, and also helps simplify unit tests should they be included in future iterations. For example, data is processed in `/services` but rendered in  `/views`.

*File structure*:

```
src/
├── model/       # Data models (Weather)
├── service/     # Services for business logic
├── views/       # Views and DOM-related logic
├── utils/       # Contains auxiliary calculations
├── styles/      # CSS styles
```
&nbsp;

## Notes on the interface design

Although the main goal of the project was to explore the use of JS methods for DOM manipulation, it was decided to improve the application by including a basic UI to improve the user experience.

*First version*:

![image](https://github.com/user-attachments/assets/45ce8664-0150-4c81-9135-97c93088fce2)

*Second version*:

![image](https://github.com/user-attachments/assets/71f2ad14-5073-4ed1-ba38-da684816dcc0)
*Final version*:

![image](https://github.com/user-attachments/assets/02711aee-439b-4b83-873a-1a6fb1fcdf02)
