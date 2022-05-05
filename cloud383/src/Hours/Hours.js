import React from "react";
import css from "./Hours.module.css";

function Hours({ hourData }) {
  return (
    <div className={css.hourContainer}>
      <img
        href={`http://openweathermap.org/img/wn/${hourData.weather[0].icon}@2x.png`}
        alt="Weather Icon"
      />
      <p>{hourData.dt}</p>
    </div>
  );
}

export default Hours;
