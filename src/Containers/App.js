import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import NavPane from '../components/NavPane';
import ViewPane from '../components/ViewPane';

class App extends Component {

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
  }

  addCity() {
    const newCity = document.getElementById('add-city').value;
    if (newCity && !this.state.cities.includes(newCity)) {
      this.setState(prevState => ({
        cities: [...prevState.cities, newCity]
      }));
    }
    document.getElementById('add-city').value = '';
  }

  render() {
    return (
      <div className="App">
        <NavPane
          cities={this.state.cities}
          selectCity={this.props.selectCity}
        />
        <div>
          <input id="add-city" type="text" placeholder="add city" />
          <button onClick={this.addCity}>add</button>
        </div>
        <ViewPane
          units={this.state.units}
          selectedCity={this.props.selectedCity || this.state.cities[0]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCity: country => dispatch(actions.selectCity(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
