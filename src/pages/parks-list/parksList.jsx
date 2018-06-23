import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

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
      return <TableRow>
          <TableRowColumn>{dataPoint.name}</TableRowColumn>
          <TableRowColumn>{dataPoint.country}</TableRowColumn>
          <TableRowColumn>{dataPoint.coasters.length}</TableRowColumn>
      </TableRow>
    })
    console.log('parknames', parkInfo)

    return (
      <div>
        <h1>Parks</h1>
        <p>What park do you want to know more about?</p>
        <div>
          <MuiThemeProvider>
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Location</TableHeaderColumn>
                  <TableHeaderColumn>No of Coasters</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {parkInfo}
              </TableBody>
            </Table>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}
 