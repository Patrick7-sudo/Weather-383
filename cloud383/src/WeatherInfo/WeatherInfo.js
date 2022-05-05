// import { useEffect, useState } from "react"

//styling
import InfoStyling from "./WeatherInfoCSS.module.css"

function WeatherInfo({ temperature, cityname, humidity, wind, precipation }) {
  return (
    <div>
      {/* container for weather info */}
      <p className={InfoStyling.temperature}>{temperature}°C</p>
      <h2 className={InfoStyling.cityname}>{cityname}</h2>
      <p className={InfoStyling.humidity}>Humiditiy: {humidity}%</p>
      <p className={InfoStyling.windSpeed}>Wind: {wind} MPH</p>
      <p className={InfoStyling.precipitation}>Precipitation: {precipation}%</p>
    </div>
  )
}

export default WeatherInfo
