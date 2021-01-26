export default class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.pressure = document.getElementById('w-pressure');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
    this.location.textContent = weather.name;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
    this.dewpoint.textContent = `Temp Max: ${weather.main.temp_max}`;
    this.wind.textContent = `Wind Speed: ${weather.wind.speed}`
  }
}