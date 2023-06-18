import { getCity, getWeather } from './weather.js';


const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

export const updateUI = (data) => {
  // Destructure the cityDets and weather objects from the data argument
  const { cityDets, weather } = data;

  // Update the details template with the new data
  details.innerHTML = `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather.Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
  `;

  // Update the icon and time images with the new data
  const iconSrc = `assets/img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconSrc);
  let timeSrc = weather.IsDayTime ? 'assets/img/day.svg' : 'assets/img/night.svg';
  time.setAttribute('src', timeSrc);

  // Remove the 'd-none' class from the card if present
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

export const updateCity = async (city) => {
  // Get the city details and weather data using the provided functions
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  // Return an object containing both the city details and weather data
  return { cityDets, weather };
};

