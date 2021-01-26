import UI from './ui';
import Weather from './weather';

const weather = new Weather('London', 'UK');
const ui = new UI();

weather.changeLocation('São Paulo', 'BR');

function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

document.addEventListener('DOMContentLoaded', getWeather);
