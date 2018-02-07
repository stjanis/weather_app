import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './nav-pane.css';

class NavPane extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: [
        "Copenhagen",
        "San Francisco",
        "Shanghai",
      ],
    };
    this.addCity = this.addCity.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  addCity() {
    const newCity = document.getElementById('add-city').value;
    if (newCity && !this.state.cities.includes(newCity)) {
      this.setState(prevState => ({
        cities: [...prevState.cities, newCity]
      }));
    }
    this.props.selectCity(newCity);
    document.getElementById('add-city').value = '';
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.addCity(document.getElementById("add-city").value);
    }
  }

  render() {
    const cities = this.state.cities.map(
      (city, index) => 
        <li
          className={`nav-pane__city ${this.props.selectedCity === city ? 'nav-pane__city--selected' : ''}`}
          key={index}
          onClick={() => this.props.selectCity(city)}
        >
          {city}
        </li>
    );

    return (
      <div className="nav-pane">
        <ul className="nav-pane__cities-list">
          {cities}
        </ul>
        <div className="nav-pane__add-city">
          <input
            className="nav-pane__city-input"
            id="add-city"
            onKeyDown={this.handleKeyDown}
            type="text" placeholder="enter city name"
          />
          <button
            className="nav-pane__city-submit"
            onClick={this.addCity}
          >
          +
          </button>
        </div>
      </div>
    )
  }
}

NavPane.propTypes = {
  selectCity: PropTypes.func.isRequired,
}

export default NavPane;
