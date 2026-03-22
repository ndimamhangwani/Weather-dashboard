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
