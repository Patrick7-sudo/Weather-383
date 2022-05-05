import { useEffect, useState } from "react"
import WeatherInfo from "../WeatherInfo/WeatherInfo"
import styles from "./SpecificDate.module.css"

function SpecificDate(data) {
  const currentBase = data
  const [imgData, setImgData] = useState(null)
  const [pic, setPic] = useState();

  function callImg() {
    if (imgData === null) {
      setImgData("birmingham")
    } else {
      const locationEntered = currentBase.weatherData.name
      setImgData(locationEntered)
    }
  }

  console.log(imgData)
  const imageURL = `https://api.unsplash.com/search/photos?query=${imgData}&client_id=cVY9k44QlpVuhp5EyI8L7jHK2TppaDn-vwCc2MPkIlg`
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
    // imgData(data)
    // console.log(data.results[0].urls.raw)
    setPic(data.results[0].urls.raw);
  }
  useEffect(() => {
    fetchImageAPI()
  }, [imgData])

  return (
    <div className={styles.background}>
      {/* fetch background image */}
      <img className={styles.mainBackground}src={pic} alt='img'/>
      <WeatherInfo
        temperature={temperature}
        cityname={cityname}
        humidity={humidity}
        wind={wind}
        precipation={precipation}
      />
    </div>
  );
}

export default SpecificDate
