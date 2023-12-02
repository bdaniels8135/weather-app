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

function extractCurrentWeatherData(weatherForecast) {
  const currentWeather = weatherForecast.current;
  const tempF = currentWeather.temp_f;
  const tempC = currentWeather.temp_c;
  const feelsLikeF = currentWeather.feelslike_f;
  const feelsLikeC = currentWeather.feelslike_c;
  const windSpeedMPH = currentWeather.wind_mph;
  const windGustMPH = currentWeather.gust_mph;
  const windDirection = currentWeather.wind_dir;
  const UVIndex = currentWeather.uv;
  const conditionText = currentWeather.condition.text;
  const conditionIconURL = currentWeather.condition.icon;
  const { humidity } = currentWeather;
  return {
    tempF,
    tempC,
    feelsLikeF,
    feelsLikeC,
    windSpeedMPH,
    windGustMPH,
    windDirection,
    UVIndex,
    conditionText,
    conditionIconURL,
    humidity,
  };
}

function extractLocationData(weatherForecast) {
  const locationData = weatherForecast.location;
  const { country, name, region } = locationData;
  return {
    country,
    name,
    region,
  };
}

function extractFutureWeather(weatherForecast, daysAhead) {
  const weatherForDayAhead = weatherForecast.forecast.forecastday[daysAhead];
  const { date } = weatherForDayAhead;
  const maxTempF = weatherForDayAhead.day.maxtemp_f;
  const maxTempC = weatherForDayAhead.day.maxtemp_c;
  const minTempF = weatherForDayAhead.day.mintemp_f;
  const minTempC = weatherForDayAhead.day.mintemp_c;
  const conditionIconURL = weatherForDayAhead.day.condition.icon;
  return {
    date,
    maxTempF,
    maxTempC,
    minTempF,
    minTempC,
    conditionIconURL,
  };
}

export default async function fetchWeatherReport(location, numDays) {
  const weatherForecast = await fetchWeatherForecast(location, numDays);
  const currentWeather = extractCurrentWeatherData(weatherForecast);
  const locationData = extractLocationData(weatherForecast);
  const weatherForecastArray = [];
  for (let dayAhead = 0; dayAhead < numDays; dayAhead += 1) {
    const daysWeather = extractFutureWeather(weatherForecast, dayAhead);
    weatherForecastArray.push(daysWeather);
  }
  return {
    currentWeather,
    locationData,
    weatherForecastArray,
  };
}
