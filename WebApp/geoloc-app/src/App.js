import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import location from './API/Geolocalisation';

class App extends Component {

    //Initialise the state without blocking the thread
    constructor() {
        super();
        this.state = {
            latitude: null,
            longitude: null,
        }
    }

    //Need to launch async affectation, so this method is automaticaly launch at the
    //component integration in the shadowDOM
    componentDidMount() {
        location.latitude.then(latitude => this.setState({latitude: latitude}));
        location.longitude.then(longitude => this.setState({longitude: longitude}));
    }

    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p>
              latitude = {this.state.latitude}
              longitude = {this.state.longitude}
          </p>

      </div>
    );
  }
}

export default App;
