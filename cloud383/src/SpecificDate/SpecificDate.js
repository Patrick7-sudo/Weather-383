import { useEffect, useState } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import styles from "./SpecificDate.module.css";

function SpecificDate(weatherData) {
  console.log(weatherData)
  const currentBase = weatherData;
  const [imgData, setImgData] = useState(null);
  const [pic, setPic] = useState();

  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  function callImg() {
    if (imgData === null) {
      setImgData("birmingham");
    } else {
      const locationEntered = currentBase.weatherData.name;
      setCityName(weatherData.name);
      setTemperature(weatherData.main.temp);
      setHumidity(weatherData.main.humidity);
      setWind(weatherData.wind.speed);
      setImgData(locationEntered);
    }
  }

  console.log(imgData);
  const imageURL = `https://api.unsplash.com/search/photos?query=London&client_id=cVY9k44QlpVuhp5EyI8L7jHK2TppaDn-vwCc2MPkIlg`;
  // console.log(imgData);

  async function fetchImageAPI() {
    callImg();
    const response = await fetch(`${imageURL}`);
    const data = await response.json();
    // console.log(data)
    // imgData(data)
    // console.log(data.results[0].urls.raw)
    setPic(data.results[0].urls.raw);
  }
  useEffect(() => {
    fetchImageAPI();
  }, [imgData]);

  return (
    <div className={styles.background}>
      {/* fetch background image */}
      <img className={styles.mainBackground} src={pic} alt="img" />
      <WeatherInfo
        temperature={temperature}
        cityname={cityName}
        humidity={humidity}
        wind={wind}
      />
    </div>
  );
}

export default SpecificDate;
