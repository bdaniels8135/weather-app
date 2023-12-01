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

// function buildLabelHtml(inputId, text) {
//   const labelHtml = document.createElement("label");
//   labelHtml.for = inputId;
//   labelHtml.innerText = text;
//   return labelHtml;
// }

function buildInputHtml(type, name, id) {
  const inputHtml = document.createElement("input");
  inputHtml.type = type;
  inputHtml.name = name;
  if (id) inputHtml.id = id;
  return inputHtml;
}

// function buildHeaderTextHtml(headerText, headerLevel) {
//   const headerTextHtml = document.createElement(`h${headerLevel}`);
//   headerTextHtml.innerHTML = headerText;
//   return headerTextHtml;
// }

// function buildSelectOption(text, value) {
//   const optionHtml = document.createElement("option");
//   optionHtml.value = value;
//   optionHtml.innerText = text;
//   return optionHtml;
// }

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

  const currentHumidityIconHtml = buildIconHtml(humidityIcon);
  currentHumidityIconHtml.classList.add("static-icon");
  const currentHumidityTextHtml = buildTextHtml("-- %");
  currentHumidityTextHtml.id = "current-humidity";

  const currentPOPLabelHtml = buildTextHtml("POP");
  currentPOPLabelHtml.classList.add("static-label");
  const currentPOPTextHtml = buildTextHtml("-- %");
  currentPOPTextHtml.id = "current-pop";

  const cityTextHtml = buildTextHtml("---,");
  cityTextHtml.id = "location-city";
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
    currentWindSpeedTextHtml,
    currentWindDirectionHtml,
    currentUVIndexIconHtml,
    currentUVIndexTextHtml,
    currentHumidityIconHtml,
    currentHumidityTextHtml,
    currentPOPLabelHtml,
    currentPOPTextHtml,
    cityTextHtml,
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

export default function buildPageElements() {
  const searchHtml = buildInputHtml("search", "search-input", "search-input");

  const tempToggleHtml = buildInputHtml(
    "button",
    "temp-toggle-btn",
    "temp-toggle-btn"
  );
  tempToggleHtml.value = `${degSymbol}F/${degSymbol}C`; // Degree Symbols

  const currentWeatherHtml = buildCurrentWeatherHtml();
  const threeDayForecastHtml = buildThreeDayForecastHtml();
  const weatherInformationHtml = wrapHtmlElements(
    "div",
    currentWeatherHtml,
    threeDayForecastHtml
  );
  weatherInformationHtml.id = "weather-information-container";

  const pageElements = document.createDocumentFragment();
  pageElements.append(searchHtml, tempToggleHtml, weatherInformationHtml);

  return pageElements;
}
