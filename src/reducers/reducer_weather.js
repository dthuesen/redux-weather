import { FETCH_WEATHER } from '../actions/index';
/**
 * WeatherReducer function
 */

// here the action (second argument) is recieved from the action creator
export default function(state = [], action) { 
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // same approach as below
      return [action.payload.data, ...state]; // this way the state won't be mutated because a new array will be added to the state
    default:
      return state
  }
  return state;
}