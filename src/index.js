import { getCity, getWeather } from './weather.js';
import { updateUI, updateCity } from './ui.js';

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');

cityForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // Update the UI with the city information
  try {
    const data = await updateCity(city);
    updateUI(data);
    // Set local storage
    localStorage.setItem('city', city);
  } catch (err) {
    console.log(err.message);
  }
});

// Check local storage for a previously searched city and update the UI
if (localStorage.getItem('city')) {
  const city = localStorage.getItem('city');
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
} else {
  card.classList.add('d-none');
}
