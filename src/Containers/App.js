import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import NavPane from '../components/NavPane';
import ViewPane from '../components/ViewPane';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
         <ViewPane
          selectedCity={this.props.selectedCity || "Copenhagen"}
        />
        <NavPane
          selectCity={this.props.selectCity}
          selectedCity={this.props.selectedCity || "Copenhagen"}
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
