import accuWeather from "../apis/accuweather";

export const selectLocation = location => {
  return {
    type: "LOCATION_SELECTED",
    payload: location
  };
};

export const addToFavorite = location => {
  return {
    type: "LOCATION_ADDED_TO_FAVORITE",
    payload: location
  };
};

export const revomeFromFavorite = location => {
  return {
    type: "LOCATION_REMOVED_FROM_FAVORITE",
    payload: location
  };
};

export const addWeatherToFavorite = weather => {
  return {
    type: "FAVORITE_LOCATION_WEATHER_ADDED",
    payload: weather
  };
};

export const fetchLocations = locationPrefix => async (dispatch, getState) => {
  const response = await accuWeather.get("/locations/v1/cities/autocomplete", {
    params: {
      apikey: "Q3rjHzgJRJ8ZIrS2wHGYkvttgqBB1zzy",
      q: locationPrefix,
      language: "en-us"
    }
  });

  dispatch({ type: "FETCH_LOCATIONS", payload: response.data });
};

export const fetchLocationWeather = locationKey => async (dispatch, getState) => {
  const response = await accuWeather.get(`/currentconditions/v1/${locationKey}`, {
      params: {
          apikey: "Q3rjHzgJRJ8ZIrS2wHGYkvttgqBB1zzy",
      }
  });

  dispatch({ type: "FETCH_LOCATION_WEATHER", payload: response.data[0] });
};
