import React, { Component } from 'react'

export class ParksList extends Component {

  state = {
    data : null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:8000/data')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { data } = this.state

    if (!data) {
      return (
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      )
    }

    console.log('data', data)
    const parkNames = data.map(dataPoint => {
      return <p>{dataPoint.park.name}</p>
    })
    console.log('parknames', parkNames)

    return (
      <div>
        <h1>Parks</h1>
        <p>What park do you want to know more about?</p>
        <div>
          {parkNames}
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    )
  }
}
 