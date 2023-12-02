import tempIcon from "./img/thermometer.svg";
import windIcon from "./img/windsock.svg";
import humidityIcon from "./img/water-percent.svg";
import uvIcon from "./img/sun-wireless-outline.svg";
import conditionLoadIcon from "./img/dots-circle.svg";

const degSymbol = "\u{00B0}";

function wrapHtmlElements(wrapperTag, ...elements) {
  const wrapperHtml = document.createElement(wrapperTag);
  wrapperHtml.append(...elements);
  return wrapperHtml;
}

function buildIconHtml(icon) {
  const iconHtml = document.createElement("img");
  iconHtml.src = icon;
  return iconHtml;
}

function buildTextHtml(text) {
  const textHtml = document.createElement("p");
  textHtml.innerText = text;
  return textHtml;
}

function buildInputHtml(type, name, id) {
  const inputHtml = document.createElement("input");
  inputHtml.type = type;
  inputHtml.name = name;
  if (id) inputHtml.id = id;
  return inputHtml;
}

function buildCurrentWeatherHtml() {
  const currentConditionIconHtml = buildIconHtml(conditionLoadIcon);
  currentConditionIconHtml.id = "current-condition-icon";
  currentConditionIconHtml.classList.add("condition-icon");
  const currentConditionTextHtml = buildTextHtml("---");
  currentConditionTextHtml.id = "current-condition-text";

  const tempIconHtml = buildIconHtml(tempIcon);
  tempIconHtml.classList.add("static-icon");
  const currentTempTextHtml = buildTextHtml(`--${degSymbol}F`);
  currentTempTextHtml.id = "current-temp";
  const currentFeelsLikeLabelHtml = buildTextHtml("Feels like");
  currentFeelsLikeLabelHtml.id = "feels-like-label";
  const currentFeelsLikeTextHtml = buildTextHtml(`--${degSymbol}F`);
  currentFeelsLikeTextHtml.id = "current-feels-like";

  const currentWindIconHtml = buildIconHtml(windIcon);
  currentWindIconHtml.classList.add("static-icon");
  const currentWindSpeedTextHtml = buildTextHtml("-- mph");
  currentWindSpeedTextHtml.id = "current-wind-speed";
  const currentWindDirectionHtml = buildTextHtml("---");
  currentWindDirectionHtml.id = "current-wind-direction";

  const currentUVIndexIconHtml = buildIconHtml(uvIcon);
  currentUVIndexIconHtml.classList.add("static-icon");
  const currentUVIndexTextHtml = buildTextHtml("---");
  currentUVIndexTextHtml.id = "current-uv-index";

  const currentPOPLabelHtml = buildTextHtml("PoP");
  currentPOPLabelHtml.classList.add("static-label");
  const currentPOPTextHtml = buildTextHtml("-- %");
  currentPOPTextHtml.id = "current-pop";

  const currentHumidityIconHtml = buildIconHtml(humidityIcon);
  currentHumidityIconHtml.classList.add("static-icon");
  const currentHumidityTextHtml = buildTextHtml("-- %");
  currentHumidityTextHtml.id = "current-humidity";

  const nameTextHtml = buildTextHtml("---");
  nameTextHtml.id = "location-name";
  const regionTextHtml = buildTextHtml("---");
  regionTextHtml.id = "location-region";

  const currentWeatherHtml = wrapHtmlElements(
    "div",
    currentConditionIconHtml,
    currentConditionTextHtml,
    tempIconHtml,
    currentTempTextHtml,
    currentFeelsLikeLabelHtml,
    currentFeelsLikeTextHtml,
    currentWindIconHtml,
    currentWindDirectionHtml,
    currentWindSpeedTextHtml,
    currentUVIndexIconHtml,
    currentUVIndexTextHtml,
    currentHumidityIconHtml,
    currentHumidityTextHtml,
    nameTextHtml,
    regionTextHtml
  );
  currentWeatherHtml.id = "current-weather-container";

  return currentWeatherHtml;
}

function buildForecastCardHtml() {
  const dayNameTextHtml = buildTextHtml("---");
  dayNameTextHtml.classList.add("day-name");

  const highTempTextHtml = buildTextHtml(`--${degSymbol}F`);
  highTempTextHtml.classList.add("temp-high");

  const lowTempTextHtml = buildTextHtml(`--${degSymbol}F`);
  lowTempTextHtml.classList.add("temp-low");

  const conditionIconHtml = buildIconHtml(conditionLoadIcon);
  conditionIconHtml.classList.add("condition-icon");

  const forecastCardHtml = wrapHtmlElements(
    "div",
    dayNameTextHtml,
    highTempTextHtml,
    lowTempTextHtml,
    conditionIconHtml
  );
  forecastCardHtml.classList.add("forecast-card");

  return forecastCardHtml;
}

function buildThreeDayForecastHtml() {
  const todayForecastCardHtml = buildForecastCardHtml();
  todayForecastCardHtml.id = "forecast-today";
  const tomorrowForecastCardHtml = buildForecastCardHtml();
  tomorrowForecastCardHtml.id = "forecast-tomorrow";
  const thirdForecastCardHtml = buildForecastCardHtml();
  thirdForecastCardHtml.id = "forecast-third";

  const threeDayForecastHtml = wrapHtmlElements(
    "div",
    todayForecastCardHtml,
    tomorrowForecastCardHtml,
    thirdForecastCardHtml
  );
  threeDayForecastHtml.id = "three-day-forecast-container";

  return threeDayForecastHtml;
}

export default function buildPageMainHtml() {
  const searchBarHtml = buildInputHtml("search", "search-box", "search-box");
  searchBarHtml.placeholder = "Enter City or ZIP Code";

  const searchBtnHtml = buildInputHtml("button", "search-btn", "search-btn");
  searchBtnHtml.value = "Search";

  const inputsHtml = wrapHtmlElements("div", searchBarHtml, searchBtnHtml);
  inputsHtml.id = "inputs-container";

  const currentWeatherHtml = buildCurrentWeatherHtml();
  const threeDayForecastHtml = buildThreeDayForecastHtml();
  const weatherInformationHtml = wrapHtmlElements(
    "div",
    currentWeatherHtml,
    threeDayForecastHtml
  );
  weatherInformationHtml.id = "weather-information-container";

  const pageMainHtml = wrapHtmlElements(
    "main",
    inputsHtml,
    weatherInformationHtml
  );

  return pageMainHtml;
}
