import React from 'react'

export const Table = (props) => {
  return (
      <div>
        <table>
          <thead>
            {props.header}
          </thead>
          <tbody>
            {props.rows}
          </tbody>
        </table>
    </div>
  )
}