import React from 'react'
import css from './day.module.css'

export const Day = ({day, temp}) => {
  return (
    <div className={css.container}>
        <p className={css.day}>{day}</p>
        <p className={css.temp}>{temp}</p>
    </div>
  )
}
