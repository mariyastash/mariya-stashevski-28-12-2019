import React, {useEffect} from "react";
import { connect } from "react-redux";

import classes from "./Weather.module.css";
import SearchBar from "./SearchBar/SearchBar";
import DailyForecast from "./DailyForecast/DailyForecast";
import Location from "./Location/Location";
import { fetchLocationWeather } from "../../actions";

const DEFAULT_CITY_KEY = 215854; //tel-aviv

const Weather = props => {

  useEffect(() => {
    props.fetchLocationWeather(DEFAULT_CITY_KEY);
  }, []);

  return (
    <div className={classes.wrap}>
      <SearchBar />
      <Location />
      <DailyForecast />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    location: state.selectedLocation,
    forecast: state.forecast
  };
};

export default connect(mapStateToProps, { fetchLocationWeather })(Weather);
