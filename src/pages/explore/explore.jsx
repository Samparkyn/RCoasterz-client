import React, { Component } from 'react'
import queryString from 'query-string'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { ExploreToggle } from '../../components/explore-toggle'
import { Search } from '../../components/search'

const API_Key = 'AIzaSyCvfuc58lTxNBio4Ni2O4yH-GzZRAag1x4'

class MapContainer extends Component {
  render() {

    let display 
    const mode = queryString.parse(this.props.location.search).mode
    
    display = (
      <div className="explore__map">
        <Map 
          google={this.props.google}
          zoom={4}
          initialCenter={{ lat: 47.097484, lng: 1.323500}}
        >
        </Map>
      </div>
    ) 

    if(mode === "list") {
      display = (
        <div>List view here</div>
      )
    }

    return (
      <div>
        <div className="explore__tools">
          <ExploreToggle active={mode} />
          <Search />
        </div>
          { display }
        </div>
    )
  }
}

export const Explore = GoogleApiWrapper({
  apiKey: (API_Key)
})(MapContainer)