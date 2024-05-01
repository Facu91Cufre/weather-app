const input = document.getElementById("city-input");
const searchBtn = document.querySelector(".search-btn");
const temp = document.querySelector(".temp");
const cityElement = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCont = document.querySelector(".weather");
const error = document.querySelector(".error");

/*Api key */
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    error.style.display = "block";
    weatherCont.style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);
    temp.innerHTML = `${Math.round(data.main.temp)}°c`;
    cityElement.innerHTML = data.name;
    console.log(cityElement.innerHTML);
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} km/h`;
    let weatherCondition = data.weather[0].main;
    console.log(weatherCondition);
    if (weatherCondition === "Clear") {
      weatherIcon.src = "./assets/clear.png";
    } else if (weatherCondition === "Clouds") {
      weatherIcon.src = "./assets/clouds.png";
    } else if (weatherCondition === "Drizzle") {
      weatherIcon.src = "./assets/drizzle.png";
    } else if (weatherCondition === "Thunderstorm") {
      weatherIcon.src = "./assets/rain.png";
    } else if (weatherCondition === "Rain") {
      weatherIcon.src = "./assets/rain.png";
    } else if (weatherCondition === "Snow") {
      weatherIcon.src = "./assets/snow.png";
    } else if (weatherCondition === "Mist") {
      weatherIcon.src = "./assets/mist.png";
    }
    weatherCont.style.display = "block";
    error.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  weatherCont.classList.remove("hidden");
  weatherCont.classList.add("show-content");
  checkWeather(input.value);
});
