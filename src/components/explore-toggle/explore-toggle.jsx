import React, { Component } from 'react'

export class ExploreToggle extends Component {
  state = {
    mapView: true,
    listView: false
  }

  toggleView = () => {
    this.setState({mapView: !this.state.mapView, listView: !this.state.listView})
    console.log(this.state);
  }

  render() {
    const { mapView, listView } = this.state

    return (
      <div className="explore__toggle">
        <div className="explore__toggle__map" onClick={this.toggleView}>
          <p>Map</p>
        </div>
        <div className="explore__toggle__list" onClick={this.toggleView}>
          <p>List</p>
        </div>
      </div>
    )
  }
}