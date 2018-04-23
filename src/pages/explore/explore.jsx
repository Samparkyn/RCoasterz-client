import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { ExploreToggle } from '../../components/explore-toggle'
import { Search } from '../../components/search'

const API_Key = 'AIzaSyCvfuc58lTxNBio4Ni2O4yH-GzZRAag1x4'

class MapContainer extends Component {
  render() {
    return (
      <div>
        <div className="explore__tools">
          <ExploreToggle />
          <Search />
        </div>
          <div className="explore__map">
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