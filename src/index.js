import "./index.css";
import API_KEY from "./apiKey";

function buildForecastWeatherURL(location, numDays) {
  return `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=${numDays}`;
}

async function fetchWeatherForecast(location, numDays) {
  const forecastWeatherURL = buildForecastWeatherURL(location, numDays);
  const forecastWeatherReportJSON = await fetch(forecastWeatherURL, {
    mode: "cors",
  });
  const forecastWeatherReport = await forecastWeatherReportJSON.json();

  return forecastWeatherReport;
}

async function extractCurrentWeatherData(weatherForecastPromise) {
  const weatherForecast = await weatherForecastPromise;
  const currentWeather = weatherForecast.current;
  const temp = currentWeather.temp_f;
  const feelsLike = currentWeather.feelslike_f;
  const windSpeed = currentWeather.wind_mph;
  const windGust = currentWeather.gust_mph;
  const windDirection = currentWeather.wind_dir;
  const uvIndex = currentWeather.uv;
  const conditionText = currentWeather.condition.text;
  const conditionIconURL = currentWeather.condition.icon;
  const { humidity } = currentWeather;
  return {
    temp,
    feelsLike,
    windSpeed,
    windGust,
    windDirection,
    uvIndex,
    conditionText,
    conditionIconURL,
    humidity,
  };
}

const threeDayForecastPromise = fetchWeatherForecast("08081", 3).catch(
  (error) => {
    console.log(error);
  }
);

const currentWeatherDataPromise = extractCurrentWeatherData(
  threeDayForecastPromise
);

currentWeatherDataPromise.then((result) => console.log(result));
