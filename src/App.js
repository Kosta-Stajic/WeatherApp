const form = document.querySelector("form");
const city = document.querySelector("#userInput");

const place = document.querySelector(".location");
const currentDay = document.querySelector(".today");
const nextDay = document.querySelector(".tomorrow");
import { getWeather } from "./fetchAPI";

//Get current Date
const currentDate = new Date();
const year = currentDate.getFullYear();

let day = currentDate.getDate();
if (day < 10) {
  day = `0${day}`;
}

let month = currentDate.getMonth() + 1;
if (month < 10) {
  month = `0${month}`;
}

//Get tomorrow's Date
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const tYear = tomorrow.getFullYear();
let tMonth = tomorrow.getMonth() + 1;
if (tMonth < 10) {
  tMonth = `0${tMonth}`;
}

let tDay = tomorrow.getDate();
if (tDay < 10) {
  tDay = `0${tDay}`;
}

//set function variables
const day1 = `${year}-${month}-${day}`;
const day2 = `${tYear}-${tMonth}-${tDay}`;

//form events
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const cityName = city.value;
  let weatherData = await getWeather(cityName, day1, day2);
  console.log(weatherData);
  place.textContent = weatherData.location;
  currentDay.textContent =
    "Today's Temp:" + " " + weatherData.today.temperature + " F";
  nextDay.textContent =
    "Tomorrow's Temp:" + " " + weatherData.tomorrow.temperature + " F";
});
