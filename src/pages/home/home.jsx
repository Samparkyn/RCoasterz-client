import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <div className="home">
      <div className="home__background" />
      <p className="intro-text">Explore and record your favourite parks and coasters </p>
      <div className="btn__container">
        <button className="btn">Launch me!</button>
      </div>
    </div>
  )
}