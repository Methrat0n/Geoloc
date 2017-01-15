import React, { Component } from 'react';

import Map from './Component/Map';
import style from './style';

class App extends Component {

    render() {
    return (
      <div className="App" style={style}>
        <Map/>
      </div>
    );
  }
}

export default App;
