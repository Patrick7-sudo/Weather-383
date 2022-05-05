import { useEffect, useState } from "react"
import WeatherInfo from "../WeatherInfo/WeatherInfo"

function SpecificDate(data) {
  const currentBase = data
  const [imgData, setImgData] = useState(data)

  if (data === null) {
    const [cityname, setcityname] = useState(data.name)
    const [temperature, setTemperature] = useState(data.main.temp)
    const [humidity, setHumidity] = useState(data.main.humidity)
    const [wind, setWind] = useState(data.wind.speed)
  }

  function callImg() {
    if (imgData === null) {
      setImgData("birmingham")
    } else {
      const locationEntered = currentBase.weatherData.name
      setImgData(locationEntered)
    }
  }

  console.log(imgData)
  const imageURL = `https://api.unsplash.com/search/photos?query=london&client_id=cVY9k44QlpVuhp5EyI8L7jHK2TppaDn-vwCc2MPkIlg`
  // console.log(imgData);

  async function fetchImageAPI() {
    callImg()
    const response = await fetch(`${imageURL}`)
    const data = await response.json()
    // console.log(data)
  }
  useEffect(() => {
    fetchImageAPI()
  }, [])

  return (
    <div>
      {/* fetch background image */}
      <WeatherInfo
        temperature={temperature}
        cityname={cityname}
        humidity={humidity}
        wind={wind}
      />
    </div>
  )
}

export default SpecificDate
