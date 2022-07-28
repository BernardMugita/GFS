import { Map } from '@googlemaps/react-wrapper';
import React, { Component } from 'react';

class MapContainer extends Component {
    render() {
        return (
            <div className="map">
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={{ width: "50%", height: "50%" }}
                    initialCenter={
                        {
                            lat: -1.338360,
                            lng: 34.689360,
                        }
                    }
                />
            </div>
        );
    }
}

export default MapContainer;