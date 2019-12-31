import { combineReducers } from "redux";

import locationsReducer from "./locatiosReducer";
import favoritesReducer from "./favoritesReducer";
import forecastReducer from "./forecastReducer";

const selectedLocationReducer = (
  selectedLocation = {
    Version: 1,
    Key: "215854",
    Type: "City",
    Rank: 31,
    LocalizedName: "Tel Aviv",
    Country: {
      ID: "IL",
      LocalizedName: "Israel"
    },
    AdministrativeArea: {
      ID: "TA",
      LocalizedName: "Tel Aviv"
    }
  },
  action
) => {
  if (action.type === "LOCATION_SELECTED") {
    return action.payload;
  } else {
    return selectedLocation;
  }
};

const selectedLocationWeatherReducer = (
  selectedLocationWeather = {},
  action
) => {
  if (action.type === "FETCH_LOCATION_WEATHER") {
    return action.payload;
  } else {
    return selectedLocationWeather;
  }
};

export default combineReducers({
  selectedLocation: selectedLocationReducer,
  locations: locationsReducer,
  selectedLocationWeather: selectedLocationWeatherReducer,
  favorites: favoritesReducer,
  forecast: forecastReducer
});
