import React from 'react'
import { Link } from 'react-router-dom'

export function ExploreToggle (props) {

  const { active } = props

  let mapClassName = 'map__button'
  let listClassName = 'list__button'

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
          <button className={mapClassName} />
        </Link>
      </div>
      <div className="explore__toggle__list">
        <Link className="list__btn__link" to="/explore?mode=list">
          <button className={listClassName} />
        </Link>
      </div>
    </div>
  )
}
