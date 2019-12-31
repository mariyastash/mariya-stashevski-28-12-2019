import React from "react";

import classes from "./DailyForecastItem.module.css";
import WeatherIcon from "../../../WeatherIcon/WeatherIcon";

const ForecastItem = props => {
    return (
        <div
            className={
                props.selected ? classes.selectedDailyCard : classes.dailyCard
            }
            onClick={props.clicked}
        >
            <div className={classes.weather}>
                <div>
                    <span className={classes.day}>
                        {props.date.substring(5, 10).replace("-", "/")}
                    </span>
                    <span className={classes.icon}>
                        <WeatherIcon iconNumber={props.iconNumber} />
                    </span>
                </div>
                <div className={classes.minMax}>
                    <span>{props.minTemperature} F°</span>
                    <span>{props.maxTemperature} F°</span>
                </div>
            </div>

            <div
                className={
                    props.selected
                        ? classes.description
                        : classes.descriptionNone
                }
            >
                <div>{props.description}</div>
            </div>
        </div>
    );
};

export default ForecastItem;
