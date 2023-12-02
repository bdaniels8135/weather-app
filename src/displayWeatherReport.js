import { format, parseISO } from "date-fns";

const degSymbol = "\u{00B0}";
const degUnit = "F";

function displayCurrentWeather(currentWeather) {
  const outputs = {
    currentTemp: document.getElementById("current-temp"),
    currentFeelsLikeF: document.getElementById("current-feels-like"),
    currentWindSpeed: document.getElementById("current-wind-speed"),
    currentWindDirection: document.getElementById("current-wind-direction"),
    currentUVIndex: document.getElementById("current-uv-index"),
    currentConditionText: document.getElementById("current-condition-text"),
    currentConditionIcon: document.getElementById("current-condition-icon"),
    currentHumidity: document.getElementById("current-humidity"),
  };

  const {
    UVIndex,
    conditionIconURL,
    conditionText,
    feelsLikeF,
    feelsLikeC,
    humidity,
    tempC,
    tempF,
    windDirection,
    windGustMPH,
    windSpeedMPH,
  } = currentWeather;

  outputs.currentTemp.innerText = `${tempF}${degSymbol}${degUnit}`;
  outputs.currentFeelsLikeF.innerText = `${feelsLikeF}${degSymbol}${degUnit}`;
  outputs.currentWindSpeed.innerText = `${windSpeedMPH} - ${windGustMPH} mph`;
  outputs.currentWindDirection.innerText = `${windDirection}`;
  outputs.currentUVIndex.innerText = `${UVIndex}`;
  outputs.currentConditionText.innerText = conditionText;
  outputs.currentConditionIcon.src = conditionIconURL;
  outputs.currentHumidity.innerText = `${humidity} %`;
}

function displayLocationData(locationData) {
  const outputs = {
    locationName: document.getElementById("location-name"),
    locationRegion: document.getElementById("location-region"),
  };

  const { region, name, country } = locationData;
  outputs.locationName.innerText = name;
  outputs.locationRegion.innerText = region;
}

function displayFutureWeather(weatherForecastArray) {
  const todayForecastHtml = document.querySelector("#forecast-today");
  const tomorrowForecastHtml = document.querySelector("#forecast-tomorrow");
  const thirdForecastHtml = document.querySelector("#forecast-third");

  const outputs = {
    todayDayName: todayForecastHtml.getElementsByClassName("day-name")[0],
    todayMaxTemp: todayForecastHtml.getElementsByClassName("temp-high")[0],
    todayMinTemp: todayForecastHtml.getElementsByClassName("temp-low")[0],
    todayConditionIcon:
      todayForecastHtml.getElementsByClassName("condition-icon")[0],
    tomorrowDayName: tomorrowForecastHtml.getElementsByClassName("day-name")[0],
    tomorrowMaxTemp:
      tomorrowForecastHtml.getElementsByClassName("temp-high")[0],
    tomorrowMinTemp: tomorrowForecastHtml.getElementsByClassName("temp-low")[0],
    tomorrowConditionIcon:
      tomorrowForecastHtml.getElementsByClassName("condition-icon")[0],
    thirdDayName: thirdForecastHtml.getElementsByClassName("day-name")[0],
    thirdMaxTemp: thirdForecastHtml.getElementsByClassName("temp-high")[0],
    thirdMinTemp: thirdForecastHtml.getElementsByClassName("temp-low")[0],
    thirdConditionIcon:
      thirdForecastHtml.getElementsByClassName("condition-icon")[0],
  };

  const [todayForecast, tomorrowForecast, thirdForecast] = weatherForecastArray;
  outputs.todayDayName.innerText = format(parseISO(todayForecast.date), "EEE");
  outputs.todayMaxTemp.innerText = `${todayForecast.maxTempF}${degSymbol}${degUnit}`;
  outputs.todayMinTemp.innerText = `${todayForecast.minTempF}${degSymbol}${degUnit}`;
  outputs.todayConditionIcon.src = todayForecast.conditionIconURL;
  outputs.tomorrowDayName.innerText = format(
    parseISO(tomorrowForecast.date),
    "EEE"
  );
  outputs.tomorrowMaxTemp.innerText = `${tomorrowForecast.maxTempF}${degSymbol}${degUnit}`;
  outputs.tomorrowMinTemp.innerText = `${tomorrowForecast.minTempF}${degSymbol}${degUnit}`;
  outputs.tomorrowConditionIcon.src = tomorrowForecast.conditionIconURL;
  outputs.thirdDayName.innerText = format(parseISO(thirdForecast.date), "EEE");
  outputs.thirdMaxTemp.innerText = `${thirdForecast.maxTempF}${degSymbol}${degUnit}`;
  outputs.thirdMinTemp.innerText = `${thirdForecast.minTempF}${degSymbol}${degUnit}`;
  outputs.thirdConditionIcon.src = thirdForecast.conditionIconURL;
}

export default function displayWeatherReport(weatherReport) {
  displayCurrentWeather(weatherReport.currentWeather);
  displayLocationData(weatherReport.locationData);
  displayFutureWeather(weatherReport.weatherForecastArray);
}
