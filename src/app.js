import Weather from './weather';

const weather = new Weather('London', 'UK');

weather.changeLocation('São Paulo', 'BR');

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', getWeather);
