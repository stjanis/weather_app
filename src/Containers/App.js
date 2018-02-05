import React, { Component } from 'react';
import '../Scss/main.css';

const API_KEY = 'f4db44a7c0f5d0532e5ea1c3505317e0';

class App extends Component {

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Copenhagen&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        hkjdgh
      </div>
    );
  }
}

export default App;
