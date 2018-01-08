import React, { Component } from 'react'

export default class GoogleMap extends Component {

  constructor(props) {
    super(props);
    console.log('lat: ', this.props.lat)
    console.log('lon: ', this.props.lon)
  }

  // If third party libraries not know how work together with react
  // and how to intgrate as a component, this is a good way to 
  // get them rendered in a component at a certain place (at the ref)
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 9,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  };

  

  render() {
    // enywhere else in this component 
    // one can refer to this.refs.map
    return <div ref="map"/>;
  }
}