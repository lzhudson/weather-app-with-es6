import UI from './ui';
import Weather from './weather';

const weather = new Weather('London', 'UK');
const ui = new UI();

weather.changeLocation('São Paulo', 'BR');

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;
  weather.changeLocation(city, country);
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
