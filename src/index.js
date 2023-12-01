import "./index.css";
import fetchWeatherReport from "./fetchWeatherReport";
import {
  buildInputHtml,
  buildCurrentWeatherHtml,
  buildThreeDayForecastHtml,
} from "./htmlBuilders";

const degSymbol = "\u{00B0}";

// const weatherReportPromise = fetchWeatherReport("08081", 4);

// weatherReportPromise
//   .then((weatherReport) => {
//     console.log(weatherReport);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const searchHtml = buildInputHtml("search", "search-input", "search-input");

const tempToggleHtml = buildInputHtml(
  "button",
  "temp-toggle-btn",
  "temp-toggle-btn"
);
tempToggleHtml.value = `${degSymbol}F/${degSymbol}C`; // Degree Symbols

const currentWeatherHtml = buildCurrentWeatherHtml();

const threeDayForecastHtml = buildThreeDayForecastHtml();

const body = document.querySelector("body");

body.append(
  searchHtml,
  tempToggleHtml,
  currentWeatherHtml,
  threeDayForecastHtml
);
