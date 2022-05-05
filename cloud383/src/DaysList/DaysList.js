import React from 'react'
import { Day } from '../Day/Day'

export const DaysList= ({dataWeather}) => {
    //let days = dataWeather.daily
    //console.log(days)
  return (
    <div>
    
    {dataWeather? dataWeather.daily.map(function(day, i){
  return ( <Day 
  key={i} 
  temp={`${Math.round(day.temp.day)} °C`} 
  weather={day.weather[0].description}
      
  />)
}): null}</div>
  )
}

