import "./index.css";
// import fetchWeatherReport from "./fetchWeatherReport";
import buildPageElements from "./buildPageElements";

// const weatherReportPromise = fetchWeatherReport("08081", 3);

// weatherReportPromise
//   .then((weatherReport) => {
//     console.log(weatherReport);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const body = document.querySelector("body");
body.append(buildPageElements());
