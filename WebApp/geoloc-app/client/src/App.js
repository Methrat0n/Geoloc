import React, { Component } from 'react';

import Map from './Component/Map';
import style from './style';

import Server from './API/Server';

class App extends Component {

    render() {
        const request = {
            id : 2,
        };
        let json = JSON.stringify(request);
        Server.search(json, (jsonAnswer) => console.log(jsonAnswer) );

        return (
          <div className="App" style={style}>
            <Map/>
          </div>
        );
    }
}

export default App;
