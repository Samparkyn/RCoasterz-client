import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { ExploreToggle } from '../../components/exploreModeToggle'

import './explore.css'

const API_Key = 'AIzaSyCvfuc58lTxNBio4Ni2O4yH-GzZRAag1x4'

class MapContainer extends Component {
  render() {
    return (
      <div>
        <ExploreToggle />
        <div className="explore">
          <Map 
            google={this.props.google}
            zoom={4}
            initialCenter={{
              lat: 47.097484,
              lng: 1.323500
            }}>
          </Map>
        </div>
      </div>
    )
  }
}

export const Explore = GoogleApiWrapper({
  apiKey: (API_Key)
})(MapContainer)