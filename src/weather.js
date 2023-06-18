const key = 'U0Fnx3NA3CuCtamwtl8jjVmhWXSiW52R';

// Get weather information
export const getWeather = async (id) => {
  const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  try {
    const response = await fetch(base + query);
    if (!response.ok) throw new Error('Could not fetch weather data');
    const data = await response.json();
    return data[0];
  } catch (err) {
    throw new Error(err.message);
  }
};

// Get city information
export const getCity = async (city) => {
  const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  try {
    const response = await fetch(base + query);
    if (!response.ok) throw new Error('Could not fetch city data');
    const data = await response.json();
    return data[0];
  } catch (err) {
    throw new Error(err.message);
  }
};