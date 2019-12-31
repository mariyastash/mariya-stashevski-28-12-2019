import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Weather</NavigationItem>
        <NavigationItem link="/favorites">Favorites</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
