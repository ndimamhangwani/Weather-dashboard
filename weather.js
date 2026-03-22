//Step 1: Select all the DOM elements from html
const form = document.querySelector('#search-form');
const input = document.querySelector('#city-input');
const statusDiv = document.querySelector('#status');
const errorDiv = document.querySelector('#error-msg');
const weatherCard = document.querySelector('#weather-card');
const cityNameEl = document.querySelector('#city-name');
const tempEl = document.querySelector('#temp');
const windEl = document.querySelector('#wind');
const conditionEl = document.querySelector('#condition');

const getCondition = (code) => {
 if (code === 0) return '☀️ Clear sky';
 if (code <= 3) return '⛅ Partly cloudy';
 if (code <= 48) return '🌫 Foggy';
 if (code <= 55) return '🌦 Drizzle';
 if (code <= 65) return '🌧 Rain';
 if (code <= 75) return '🌨 Snow';
 if (code <= 82) return '🌧 Showers';
 if (code === 95) return '⛈ Thunderstorm';
 return `Code ${code}`;
};

// Step 2: write a getCoordinates(city) async function
//It fetches API 1
const getCoordinates = async (city) =>{
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
console.log('Searching...');
// checks the response.ok
if (!res.ok) {
    throw new Error('Failed to fectch location');
}
// data.results is not empty
const data = await res.json();

if (!data.results || data.results.length === 0) {
    throw new Error('City was not found'); // If data.results is empty or undefined -> city was not found error
}
//Data that response when a city have been found
const place = data.results[0]; 
console.log(`Found: ${place.name}`);

return{
lat: place.latitude,
lon: place.longitude,
name: place.name,
country: place.country
};

};
