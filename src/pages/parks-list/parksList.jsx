import React, { Component } from 'react'
import { Table } from '../../components/table'

export class ParksList extends Component {

  state = {
    data : null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:8000/park-data')
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
    const parkInfo = data.map(dataPoint => {
      return <tr key={dataPoint.id} className="table__row">
          <td>{dataPoint.name}</td>
          <td>{dataPoint.country}</td>
          <td>{dataPoint.coasters.length}</td>
      </tr>
    })
    console.log('parknames', parkInfo)
    
    const headers = <tr>
    <th>Name</th>
    <th>Location</th>
    <th>No. of Coasters</th>
    </tr>

    return (
      <div>
        <h1>Parks</h1>
        <p>What park do you want to know more about?</p>
       <Table header={headers} rows={parkInfo} />
        </div>
    )
  }
}
 