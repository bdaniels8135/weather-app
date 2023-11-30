import "./index.css";
import fetchWeatherReport from "./fetchWeatherReport";

const weatherReportPromise = fetchWeatherReport("08081", 4);

weatherReportPromise
  .then((weatherReport) => {
    console.log(weatherReport);
  })
  .catch((error) => {
    console.log(error);
  });
