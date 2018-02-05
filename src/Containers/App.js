import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import MainPane from '../Components/MainPane';
import '../Scss/main.css';

const API_KEY = 'f4db44a7c0f5d0532e5ea1c3505317e0';

class App extends Component {

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&APPID=${API_KEY}`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then(data => console.log(data))
      .catch(error => 
        console.log(`Ups, something failed: ${error.message}`)
      );
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          cities={["Copenhagen", "San Francisco", "Shanghai"]}
        />
        <MainPane />
      </div>
    );
  }
}

export default App;
