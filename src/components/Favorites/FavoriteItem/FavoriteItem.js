import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./FavoriteItem.module.css";
import WeatherIcon from "../../WeatherIcon/WeatherIcon";
import {selectLocation, fetchLocationWeather } from "../../../actions";

const FavoriteItem = props => {
  let history = useHistory();

  const handleSelectedFavorite = () => {
    props.selectLocation(props.location);
    props.fetchLocationWeather(props.locationKey);
    history.push("/");
  };

  return (
    <div className={classes.card} onClick={() => handleSelectedFavorite()}>
      <h2>{props.locationName}</h2>
      <div className={classes.icon}>
        <WeatherIcon iconNumber={props.iconNumber} />
      </div>
      <h3>
        {props.description}
        <span>
          Wind 10km/h <span className={classes.dot}>•</span> Precip 0%
        </span>
      </h3>
      <h1>{props.temp ? `${props.temp}°` : ""}</h1>
    </div>
  );
};

export default connect(null, { selectLocation, fetchLocationWeather })(FavoriteItem);
