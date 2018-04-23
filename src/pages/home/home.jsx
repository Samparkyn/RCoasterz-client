import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home">
      <div className="home__background" />
      <p className="intro-text">Explore and record your favourite parks and coasters </p>
      <div className="btn__container">
        <Link className="btn__link" to="/explore">
          <button className="btn">Launch me!</button>
        </Link>
      </div>
    </div>
  )
}