import React from "react";

import classes from "./WeatherIcon.module.css";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../assets/images", false, /\.(png|jpe?g|svg)$/)
);

const WeatherIcon = props => {
  return (
    <div className={classes.icon}>
      <img src={images[props.iconNumber]} alt="weather icon" />
    </div>
  );
};

export default WeatherIcon;
