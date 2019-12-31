import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";

import classes from "./SearchBar.module.css";
import {
  fetchLocations,
  fetchLocationWeather,
  selectLocation
} from "../../../actions";

const SearchBar = props => {
  const [open, setOpen] = React.useState(false);
  const loading = open && props.locations.length === 0;

  const handleSelected = (event, value) => {
    if (value) {
      try {
        props.selectLocation(value);
        props.fetchLocationWeather(value.Key);
      } catch (e) {
        console.log("ERROR =>", e);
      }
    } else {
      props.fetchLocations(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <span className={classes.title}>WEATHER</span>
      <Autocomplete
        className={classes.wrap}
        open={open}
        onOpen={() => {
          if (props.locations.length !== 0) {
            setOpen(true);
          }
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) =>
          option.LocalizedName === value.LocalizedName
        }
        getOptionLabel={option => {
          return option.LocalizedName;
        }}
        options={props.locations}
        loading={loading}
        renderInput={params => (
          <div className={classes.search}>
            <TextField
              className={classes.searchTerm}
              {...params}
              placeholder="Enter city name"
              fullWidth
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                )
              }}
              onChange={(event, values) => {
                if (!event.target.value) {
                  setOpen(false);
                }
                handleSelected(event, values);
              }}
            />
          </div>
        )}
        onChange={(event, values) => {
          if (!event.target.value) {
            setOpen(false);
          }
          handleSelected(event, values);
        }}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return { locations: state.locations };
};

export default connect(mapStateToProps, {
  fetchLocations,
  fetchLocationWeather,
  selectLocation
})(SearchBar);
