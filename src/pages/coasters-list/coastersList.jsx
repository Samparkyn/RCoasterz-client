import React, { Component } from 'react'

export class CoastersList extends Component {

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

    console.log('coaster data ', data)
    const coasterNames = data.map(dataPoint => {
      return <p>{dataPoint.name}</p>
    })
    console.log('coasternames', coasterNames)

    return (
      <div>
        <h1>Coasters</h1>
        <p>What coaster do you want to know more about?</p>
        <div>
          <p>Coasters</p>
          {coasterNames}
        </div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    )
  }
}


