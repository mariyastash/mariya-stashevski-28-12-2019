import React from "react";
import { connect } from "react-redux";
import AddLocationIcon from "@material-ui/icons/AddLocation";

import classes from "./Location.module.css";
import { addToFavorite, revomeFromFavorite } from "../../../actions";

const Location = ({ location, locationWeather, favorites, addToFavorite, revomeFromFavorite }) => {
  const handleAddRemovetoFavorites = () => {
    if(favorites.some( favLocation => favLocation.Key === location.Key )){
      revomeFromFavorite(location);
    }
    else {
      addToFavorite(location);
    }
  };

  return (
    <div className={classes.container}>
      <span className={classes.name}>{location.LocalizedName} </span>
      <span className={classes.name}>{locationWeather.Temperature ? locationWeather.Temperature.Imperial.Value: ""} F°</span>
      <button
        className={classes.addToFavoriteButton}
        onClick={() => handleAddRemovetoFavorites()}
      >
      {favorites.some( favLocation => favLocation.Key === location.Key ) ? "" : <AddLocationIcon
          style={{ position: "relative", top: "5px", marginRight: "10px" }}
        />}
        
        {favorites.some( favLocation => favLocation.Key === location.Key ) ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    location: state.selectedLocation,
    locationWeather: state.selectedLocationWeather,
    favorites: state.favorites
  };
};

export default connect(mapStateToProps, { addToFavorite, revomeFromFavorite })(Location);
