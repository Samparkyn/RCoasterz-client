import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './header.css'

export class Header extends Component {
  state = {

  }

  render() {

    return (
      <div className="header">
        <div className="header__wrapper">
          <div className="header__container-left">
            <Link className="header__link" to="/">RCoasterz</Link>
          </div>
          <div className="header__container-right">
            <Link className="header__link" to="/parks">Parks</Link>
            <Link className="header__link" to="/coasters">Coasters</Link>
            <Link className="header__link" to="/login">Login</Link>
          </div>
        </div>
      </div>
    )

  }
}