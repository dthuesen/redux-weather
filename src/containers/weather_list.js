import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component {
  renderWeather = (cityData) => {
    const name = cityData.city.name;
    const key = cityData.city.name + Date.now();

    const temps = cityData.list.map( weather => weather.main.temp );
    const pressures = cityData.list.map( weather => weather.main.pressure );
    const humidities = cityData.list.map( weather => weather.main.humidity );
    const { lon, lat } = cityData.city.coord;
    const icon = cityData.list[0].weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;
    const weatherDescription = cityData.list[0].weather[0].description;

    // console.log('temps: ', temps);
    // console.log('pressures: ', pressures);
    // console.log('humidities: ', humidities);
    console.log('cityData icon: ', cityData.list[0].weather[0]);

    const width = 180;
    const height = 100;

    return(
      <tr key={key}>
        <td className="city"> 
          <GoogleMap lon={ lon } lat={ lat } />
          {name} <span className="weather-description"><img className="weather-icon" src={iconUrl} alt={weatherDescription}/> {weatherDescription}</span>
        </td>
        <td>
          <Chart data={temps} lineColor={'red'} width={width} height={height} unit="°C" />
        </td>
        <td>
          <Chart data={pressures} lineColor={'blue'} width={width} height={height} unit="hPa" />
        </td>
        <td>
          <Chart data={humidities} lineColor={'orange'} width={width} height={height} unit="%" />
        </td>
      </tr>
    )
  }
  render() {
    return(
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ weather }) { // here weather will be pulled out of the state (state.weather)
  return { weather };    // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);