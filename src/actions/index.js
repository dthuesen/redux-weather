  import axios from 'axios';
  
  // The API key for my account at OpenWeatherMap
  const OPEN_WEATHERMAP_API_KEY = '5dc917e18e833e212d94953d66b80e20';
  // Example for api call: 'http://api.openweathermap.org/data/2.5/forecast?q=hamburg,de&appid=b6907d289e10d714a6e88b30761fae22'
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHERMAP_API_KEY}&units=metric`; // units=metric is for temp in Celsius
  const COUNTRY_CODE = 'de'

  // Constants
  export const FETCH_WEATHER = 'FETCH_WEATHER';

  // Action Creators
  export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
    const request = axios.get(url);                         // this get request returns a Promise and will be assigned to the const

    // here the action will be created and then send to the reducers...
    // ...or to the middleware (in this case to redux-promise)
    return {
      type: FETCH_WEATHER,
      payload: request
    }
  }