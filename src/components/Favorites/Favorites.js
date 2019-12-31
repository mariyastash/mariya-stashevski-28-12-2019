import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import classes from "./Favorites.module.css";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import { fetchLocationWeather, addWeatherToFavorite } from "../../actions";
import accuweather from "../../apis/accuweather";

const Favorites = props => {
  const [favoritesLocationTemp, setFavoritesLocationTemp] = useState([]);
  const [weatherIconNumbers, setWeatherIconNumbers] = useState([]);
  const [weatherText, setWeatherText] = useState([]);

  const fetchWeather = async key => {
    let temperatures = [];
    let icons = [];
    let texts = [];
    for (const location of props.favorites) {
      const response = await accuweather.get(`/currentconditions/v1/${location.Key}`, {
        params: {
          apikey: "Q3rjHzgJRJ8ZIrS2wHGYkvttgqBB1zzy"
        }
      });
      temperatures.push(response.data[0].Temperature.Imperial.Value);
      icons.push(response.data[0].WeatherIcon);
      texts.push(response.data[0].WeatherText);
    }

    setFavoritesLocationTemp(temperatures);
    setWeatherIconNumbers(icons);
    setWeatherText(texts);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const generateContent = () => {
    let content = "";
    if (props.favorites.length > 0) {
      content = (
        <React.Fragment>
          {props.favorites.map((location, i) => {
            return (
              <FavoriteItem
                location={location}
                locationName={location.LocalizedName}
                key={location.Key}
                locationKey={location.Key}
                temp={favoritesLocationTemp[i]}
                iconNumber={weatherIconNumbers[i]}
                description={weatherText[i]}
              />
            );
          })}
        </React.Fragment>
      );
    }
    else{
      content = <span style={{color: "white", width: "100%", textAlign: "center", fontWeight: "bolder"}}>NO FAVORITE PLACES FOUND</span>;
    }

    return content;
  }


  return (
    <div className={classes.container}>
      {generateContent()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

export default connect(mapStateToProps, {
  fetchLocationWeather,
  addWeatherToFavorite
})(Favorites);
