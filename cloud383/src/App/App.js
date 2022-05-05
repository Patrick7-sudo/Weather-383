import "./App.css";     
import {useEffect, useState} from 'react';
import WeeklyView from "../WeeklyView/WeeklyView.js";


function App() {
  
  const [cordenates , setCordenates] = useState({});
  const [dataWeather , setDataWeather] = useState();
  console.log(dataWeather);
  // Api-url to get the coordinates
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=895284fb2d2c50a520ea537456963d9c`;
  // Api-url to get the weather 
  const url2 = `http://api.openweathermap.org/data/2.5/onecall?lat=${cordenates.lat}&lon=${cordenates.lon}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
  
  // useEffect for getting the longitud and latitud data
  useEffect(() => {

  async function fetchAPI(){
  const response = await fetch(`${url}`);
  const data = await response.json();
  setCordenates({lat: data[0].lat , lon: data[0].lon})  
  }

  fetchAPI()
}, [url]);

// useEffect for getting the 8 days weather data
useEffect(() => {
  async function weatherData() {
    const response = await fetch(`${url2}`);
    const data = await response.json();
    setDataWeather(data);
   // console.log(data)
  }
  if (cordenates) {
    weatherData()
  } 

},[cordenates, url2])


  return (
    <div className="App">
    <WeeklyView dataWeather={dataWeather} />  
    </div>
  );
}

export default App;
