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
      return <TableRow>
          <TableRowColumn>{dataPoint.name}</TableRowColumn>
          <TableRowColumn>{dataPoint.park.name}</TableRowColumn>
          <TableRowColumn>{dataPoint.park.country}</TableRowColumn>
          <TableRowColumn>{dataPoint.stats.inversions}</TableRowColumn>
      </TableRow>
    })
    console.log('coasternames', coasterInfo)

    return (
      <div>
        <h1>Coasters</h1>
        <p>What Coaster do you want to know more about?</p>
        <div>
          <MuiThemeProvider>
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Park</TableHeaderColumn>
                  <TableHeaderColumn>Country</TableHeaderColumn>
                  <TableHeaderColumn>Inversions</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                {coasterInfo}
              </TableBody>
            </Table>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}


