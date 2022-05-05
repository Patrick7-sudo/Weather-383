import React from 'react'
import { DaysList } from '../DaysList/DaysList.js';
import HoursList from '../HoursList/HoursList.js';

export const WeeklyView = ({dataWeather}) => {
  return (
    <div>

        <HoursList dataWeather={dataWeather}/>
        <DaysList dataWeather={dataWeather}/>

    </div>
  )
}
