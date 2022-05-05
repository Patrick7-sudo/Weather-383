import "./App.css";
import DailyView from "../DailyView/DailyView.js";
import { useEffect,useState } from "react"

//Components
import SpecificDate from "../SpecificDate/SpecificDate"

function App() {
  const [weatherData, setWeatherData] =useState({});
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=895284fb2d2c50a520ea537456963d9c`

  async function fetchAPI() {
    const response = await fetch(`${url}`)
    const data = await response.json()
    console.log(data)
    setWeatherData(data)
  }


  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <div className="App">

      <DailyView />
      <SpecificDate weatherData={weatherData}/>

    </div>
  )
}

export default App
