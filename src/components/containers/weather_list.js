import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine} from 'react-sparklines'

class WeatherList extends Component {
  renderWeather = (cityData) => {
    const name = cityData.city.name;
    const key = cityData.city.name + Date.now();

    const temps = cityData.list.map( weather => weather.main.temp );
    const pressures = cityData.list.map( weather => weather.main.pressure );
    const humidities = cityData.list.map( weather => weather.main.humidity );

    console.log('temps: ', temps);
    console.log('pressures: ', pressures);
    console.log('humidities: ', humidities);

    return(
      <tr key={key}>
        <td>{name}</td>
        <td>
          <Sparklines data={temps} width={160} >
           <SparklinesLine />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={pressures} width={180} margin={10}>
           <SparklinesLine />
          </Sparklines>
        </td>
        <td>
          <Sparklines data={humidities} width={180} margin={10}>
           <SparklinesLine />
          </Sparklines>
        </td>
      </tr>
    )
  }
  render() {
    return(
      <div>
        <h1>The Weather List Component</h1>
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