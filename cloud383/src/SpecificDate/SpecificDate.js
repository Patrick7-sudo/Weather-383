import { useEffect, useState } from "react"
import WeatherInfo from "../WeatherInfo/WeatherInfo"

function SpecificDate(data) {
  const currentBase = data
  const [imgData, setImgData] = useState(data)

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
  const cityname = "Birmingham"
  const temperature = "20"
  const humidity = "60"
  const wind = "10"
  const precipation = "50"

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
        precipation={precipation}
      />
    </div>
  )
}

export default SpecificDate
