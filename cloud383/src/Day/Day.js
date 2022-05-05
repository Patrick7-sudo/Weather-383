import React from "react";
import css from "./Day.module.css";

export const Day = ({ day, temp, weather }) => {
  return (
    <div className={css.container}>
      <p className={css.day}>{day}</p>
      <p className={css.temp}>{temp}</p>
      <p className={css.weather}>{weather}</p>
    </div>
  );
};
