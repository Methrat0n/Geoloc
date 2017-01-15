/**
 * Created by merlin on 14/01/17.
 */
import React, {PureComponent} from 'react';
import GoogleMap from 'google-map-react';

import location from '../API/Geolocalisation';
import style from '../style';

class Map extends PureComponent {

    constructor(props) {
        super(props);
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
        const center = {lat: this.state.latitude, lng: this.state.longitude};
        const zoom = 13;

        return (
            <div style={style}>
                <GoogleMap
                    center={center}
                    zoom={zoom}
                    bootstrapURLKeys={{
                        key: 'AIzaSyDQTWUriimlkHRpDc8c4x1oDE28IbFrC-E',
                        language: 'fr',
                    }}>
                </GoogleMap>
            </div>
        );
    }
}

export default Map;