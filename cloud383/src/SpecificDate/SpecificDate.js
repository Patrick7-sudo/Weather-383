import { useEffect } from "react"
import WeatherInfo from "../WeatherInfo/WeatherInfo"

function SpecificDate() {
  const imageURL =
    "https://api.unsplash.com/search/photos?query=london&client_id=cVY9k44QlpVuhp5EyI8L7jHK2TppaDn-vwCc2MPkIlg"

  async function fetchImageAPI() {
    const response = await fetch(`${imageURL}`)
    const data = await response.json()
    console.log(data)
  }
  useEffect(() => {
    fetchImageAPI()
  }, [])

  return (
    <div>
      {/* fetch background image */}
      <WeatherInfo />
    </div>
  )
}

export default SpecificDate
