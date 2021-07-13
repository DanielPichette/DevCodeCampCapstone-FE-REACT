import React, { Component } from 'react';
import './resources.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
///import axios from 'axios';

class Resources extends Component {
    constructor(props) {
        super(props);
            this.state = {
                LostPets: [this.props.lostpets],
             }
        }


    render() {
        return ( 
          <div className="Resources">
            <div>TEMP</div>
            <div className="map">
              {/* <Map google={this.props.google} zoom={15} initialCenter={{ lat: 43.0963042, lng: -87.8878806 }} style={{width:'50vw',height:'80vh'}}>
                {this.props.state.resources.map(place =>(
                  <Marker
                  key={place.name}
                  position={{
                    lat: place.geometry.location.lat,
                    lng: place.geometry.location.lng
                  }}
                  />
                ))}
                <InfoWindow onClose={this.onInfoWindowClose}>
                      {/* <div>
                      <h1>{this.state.selectedPlace.name}</h1>
                    </div>  
                </InfoWindow>
              </Map> */}
          </div>

          </div>
        )
    }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyApIi4wU9eRbKJHcLrMZ2v6Ju4IqXGAnfw")
})(Resources)