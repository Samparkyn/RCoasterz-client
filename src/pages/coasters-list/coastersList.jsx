import React, { Component } from 'react'
import { Table } from '../../components/table'

export class CoastersList extends Component {

  state = {
    data : null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:8000/coaster-data')
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
    const coasterInfo = data.map(dataPoint => {
      return <tr key={dataPoint.id} className="table__row">
          <td>{dataPoint.name}</td>
          <td>{dataPoint.park.name}</td>
          <td>{dataPoint.park.country}</td>
          <td>{dataPoint.stats.inversions}</td>
      </tr>
    })

    const headers = <tr>
    <th>Name</th>
    <th>Park</th>
    <th>Location</th>
    <th>Inversions</th>
    </tr>


    return (
      <div>
        <h1>Coasters</h1>
        <p>What Coaster do you want to know more about?</p>
        <Table header={headers} rows={coasterInfo} />
      </div>  
    )
  }
}


