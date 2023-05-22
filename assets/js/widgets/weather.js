var weatherToggle = document.getElementById('weatherToggle');
var weatherWidget = document.getElementById('weatherWidget');
var apiKeyMenu = document.getElementById('apikey');
var apiKey = document.getElementById("apiKey")
var cityNameMenu = document.getElementById("city")
var apiTab = document.getElementById("apiTabButton")

function saveApiKey() {
    var apiKeyInput = document.getElementById('apiKey');
    var apiKey = apiKeyInput.value;

    localStorage.setItem('apiKey', apiKey);
    console.log('API key saved:', apiKey);
  }

window.addEventListener('DOMContentLoaded', function() {
    var apiKeyInput = document.getElementById('apiKey');
    var savedApiKey = localStorage.getItem('apiKey');
    if (savedApiKey) {
      apiKeyInput.value = savedApiKey;
    }
});

function saveCityName() {
    var cityNameInput = document.getElementById('cityName');
    var cityName = cityNameInput.value;

    localStorage.setItem('cityname', cityName);
    console.log('City saved:', cityName);
    location.reload()
  }

window.addEventListener('DOMContentLoaded', function() {
    var cityNameInput = document.getElementById('cityName');
    var savedCity = localStorage.getItem('cityname');
    if (savedCity) {
        cityNameInput.value = savedCity;
    }
});

var savedState = localStorage.getItem('weatherWidgetState');

if (savedState === 'enabled') {
    weatherToggle.checked = true;
    weatherWidget.style.display = 'block';
    apiKeyMenu.style.display = 'block';
    cityNameMenu.style.display = 'block';
    apiTab.classList.remove("disabled")
  console.log('Weather widget enabled (from local storage)');
} else {
    weatherToggle.checked = false;
    weatherWidget.style.display = 'none';
    apiKeyMenu.style.display = 'none';
    cityNameMenu.style.display = 'none';
    apiTab.classList.add("disabled")
  console.log('Weather widget disabled (from local storage)');
}

function toggleWeatherWidget() {
  if (weatherToggle.checked) {
    weatherWidget.style.display = 'block';
    apiKeyMenu.style.display = 'block';
    cityNameMenu.style.display = 'block';
    apiTab.classList.remove("disabled")
    localStorage.setItem('weatherWidgetState', 'enabled');
    console.log('Weather widget enabled');
  } else {
    weatherWidget.style.display = 'none';
    apiKeyMenu.style.display = 'none';
    cityNameMenu.style.display = 'none';
    apiTab.classList.add("disabled")
    localStorage.setItem('weatherWidgetState', 'disabled');
    console.log('Weather widget disabled');
  }
}

function fetchWeatherData() {
    var apiKey = localStorage.getItem('apiKey');
    var savedCity = localStorage.getItem('cityname');
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    var url = apiUrl + "?q=" + savedCity + "&appid=" + apiKey + "&units=metric"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        var locationElement = document.getElementById('location');
        var temperatureElement = document.getElementById('temperature');
  
        locationElement.textContent = data['name'];
        temperatureElement.textContent = Math.round(data["main"]["temp"]) + '°C';
        var iconUrl = "https://openweathermap.org/img/wn/"+ data["weather"][0]["icon"] + "@2x.png"
        document.getElementById("icon").src=iconUrl;
      })
      .catch(error => {
        var locationElement = document.getElementById('location');
        var temperatureElement = document.getElementById('temperature');
        locationElement.textContent = "N/A"
        temperatureElement.textContent = "N/A"
        console.error('Error fetching weather data:', error);
      });
  }

function detectByIP() {
  var url = "https://wtfismyip.com/json"
  fetch(url)
      .then(response => response.json())
      .then(data => {
        var cityNameInput = document.getElementById('cityName');
        cityNameInput.value = data['YourFuckingCity']
      })
}

fetchWeatherData();  