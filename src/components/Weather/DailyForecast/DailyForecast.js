import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import classes from "./DailyForecast.module.css";
import DailyForecastItem from "./DailyForecastItem/DailyForecastItem";
import accuWeather from "../../../apis/accuweather";

const DailyForecast = props => {
  const [forecast, setForecast] = useState([]);
  const [selected, setSelected] = useState(false);

  const fetchLocationForecast = async forecast => {
    const response = await accuWeather.get(`/forecasts/v1/daily/5day/${props.location.Key}`, {
        params: {
            apikey: "Q3rjHzgJRJ8ZIrS2wHGYkvttgqBB1zzy",
        }
    });

    const responseForecast = response.data.DailyForecasts;
    responseForecast.forEach(item => {
      item.selected = selected;
    });
    setForecast(responseForecast);
  };

  const handleSelection = selectedDay => {
    forecast.forEach(day => {
      if (day.EpochDate !== selectedDay.EpochDate) {
        day.selected = false;
      } else {
        if (day.selected) {
          day.selected = false;
        } else {
          day.selected = true;
        }
      }
    });
  };

  useEffect(() => {
    fetchLocationForecast(forecast);
  }, [props.location.Key]);

  return (
    <div className={classes.container}>
      {forecast.map((day, i) => {
        return (
          <DailyForecastItem
            key={i}
            date={day.Date}
            minTemperature={day.Temperature.Minimum.Value}
            maxTemperature={day.Temperature.Maximum.Value}
            iconNumber={day.Day.Icon}
            description={day.Day.IconPhrase}
            clicked={() => {
              handleSelection(day);
              setSelected(!selected);
            }}
            selected={day.selected}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    location: state.selectedLocation
  };
};

export default connect(mapStateToProps)(DailyForecast);
