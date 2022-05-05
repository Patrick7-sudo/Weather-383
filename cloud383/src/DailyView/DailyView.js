import CalendarDate from "../CalendarDate/CalendarDate.js"
import InputField from "../InputField/InputField.js"
import SpecificDate from "../SpecificDate/SpecificDate.js"

import { useEffect, useState } from "react"

export default function DailyView() {
  const [inputField, setInputField] = useState("")
  const [date, setDate] = useState("")
  const [weatherData, setWeatherData] = useState({})

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

  const calendarDate = () => {
    let today = new Date()
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    today = month[today.getMonth()] + " " + today.getDate()
    today.toString()
    //console.log(today);
    setDate(today)
  }

  useEffect(() => {
    calendarDate()
  })

  const onChange = (e) => {
    console.log(e.target.value)
    setInputField(e.target.value)
  }

  return (
    <div>
      <InputField onChange={onChange} text={inputField} />
      <SpecificDate weatherData={weatherData} />
      <CalendarDate date={date} />
    </div>
  )
}
