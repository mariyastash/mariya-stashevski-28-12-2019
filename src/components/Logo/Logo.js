import React from "react";

import weatherLogo from "../../assets/images/weather-logo.png";
import classes from "./Logo.module.css";

const Logo = () => (
    <div className={classes.Logo}>
        <img src={weatherLogo} alt="weather logo"/>
    </div>
);

export default Logo;