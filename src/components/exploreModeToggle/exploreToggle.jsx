import React, { Component } from 'react'

import './exploreToggle.css'

export class ExploreToggle extends Component {
  state = {

  }

  render() {

    return (
      <div className="explore__container">
        <div className="map-view">
          <p>Map</p>
        </div>
        <div className="list-view">
          <p>List</p>
        </div>
      </div>
    )
  }
}