export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_LOCATION_WEATHER_FORECAST":
      return action.payload;
    default:
      return state;
  }
};
