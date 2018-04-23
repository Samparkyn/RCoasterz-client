import React from 'react'
import { Link } from 'react-router-dom'

export function ExploreToggle (props) {

  const { active } = props

  let mapClassName = 'btn'
  let listClassName = 'btn'

  if (active === 'map') {
    mapClassName += ' selected'
  }

  if (active === 'list') {
    listClassName += ' selected'
  }

  return (
    <div className="explore__toggle">
      <div className="explore__toggle__map">
        <Link className="map__btn__link" to="/explore?mode=map">
          <button className={mapClassName}>Map</button>
        </Link>
      </div>
      <div className="explore__toggle__list">
        <Link className="list__btn__link" to="/explore?mode=list">
          <button className={listClassName}>List</button>
        </Link>
      </div>
    </div>
  )
}
