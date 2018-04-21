import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  state = {

  }

  render() {

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/parks">Parks</Link>
        <Link to="/coasters">Coasters</Link>
      </div>
    )

  }
}