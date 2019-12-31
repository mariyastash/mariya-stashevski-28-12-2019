export default (state = [], action) => {
  switch (action.type) {
    case "LOCATION_ADDED_TO_FAVORITE":
      return [...state, action.payload];
    case "LOCATION_REMOVED_FROM_FAVORITE":
      return state.filter(location => location.Key !== action.payload.Key);
    default:
      return state;
  }
};
