/**
 * Created by merlin on 14/01/17.
 */
import React, {Component} from 'react';

import location from '../API/Geolocalisation';

class Map extends Component {

    constructor() {
        super();
        this.state = {
            latitude: null,
            longitude: null,
        }
    }

    componentDidMount() {
        location.latitude.then(latitude => this.setState({latitude: latitude}));
        location.longitude.then(longitude => this.setState({longitude: longitude}));
    }

    render() {
        return (<google-map apiKey="AIzaSyDQTWUriimlkHRpDc8c4x1oDE28IbFrC-E" />);
    }
}

export default Map;