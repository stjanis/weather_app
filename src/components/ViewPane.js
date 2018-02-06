import React, { Component } from 'react';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f4db44a7c0f5d0532e5ea1c3505317e0';

class ViewPane extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: {},
      units: 'metric',
      isLoading: false,
    };

    this.toggleUnits = this.toggleUnits.bind(this);
    this.fetchWeatherData = this.fetchWeatherData.bind(this);
  }

  fetchWeatherData() {
    this.setState(() => ({ isLoading: true }));

      fetch(`${API_URL}?q=${this.props.selectedCity}&units=${this.state.units}&APPID=${API_KEY}`)
        .then(response => {
          if(response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(data => this.setState(() => ({ weatherData: data, isLoading: false })))
        .catch(error => 
          console.log(`Ups, something failed: ${error.message}`)
        );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.units !== this.state.units ||
      prevProps.selectedCity !== this.props.selectedCity
    ) {
      this.fetchWeatherData();
    }
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  toggleUnits() {
    this.setState(prevState => {
      return prevState.units === 'metric' ? ({ units: 'imperial' }) : ({ units: 'metric' })
    });
  }

  render() {
    return (
      <div>
        {
          this.state.weatherData.main ?
            <h1>{this.state.weatherData.main.temp}</h1> :
            <span>Loading...</span>
        }

        <div onClick={this.toggleUnits}>Change units</div>
      </div>
    )
  }
}



export default ViewPane;
