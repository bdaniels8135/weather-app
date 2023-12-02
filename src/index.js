import "./index.css";
import fetchWeatherReport from "./fetchWeatherReport";
import buildPageMainHtml from "./buildPageMainHtml";
import displayWeatherReport from "./displayWeatherReport";

const body = document.querySelector("body");
const main = buildPageMainHtml();
body.append(main);

const weatherReportPromise = fetchWeatherReport("08081", 3);

weatherReportPromise
  .then((weatherReport) => {
    displayWeatherReport(weatherReport);
  })
  .catch((error) => {
    console.log(error);
  });
