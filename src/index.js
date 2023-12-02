import "./index.css";
import fetchWeatherReport from "./fetchWeatherReport";
import buildPageMainHtml from "./buildPageMainHtml";
import displayWeatherReport from "./displayWeatherReport";

const body = document.querySelector("body");
const mainPageHtml = buildPageMainHtml();
body.appendChild(mainPageHtml);

const searchBox = document.querySelector("#search-box");

searchBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const weatherReportPromise = fetchWeatherReport(searchBox.value, 3);
    weatherReportPromise
      .then((weatherReport) => {
        displayWeatherReport(weatherReport);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => {
  const weatherReportPromise = fetchWeatherReport(searchBox.value, 3);
  weatherReportPromise
    .then((weatherReport) => {
      displayWeatherReport(weatherReport);
    })
    .catch((error) => {
      console.log(error);
    });
});
