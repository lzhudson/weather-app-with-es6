import UI from './ui';
import Weather from './weather';
import Storage from './storage';

const weather = new Weather('London', 'UK');
const ui = new UI();
const storage = new Storage();

const weatherLocation = storage.getLocationData();

weather.changeLocation(weatherLocation.city, weatherLocation.country);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  weather.changeLocation(city, country);
  storage.setLocationData(city, country);
  getWeather();
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', getWeather);
