import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DateForcast.css";

export default function DateForcast(props){
  
  function day(){
  let date = new Date(props.data.dt * 1000);
  let currentDay = date.getDay();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return days[currentDay];
}

    return(
        <div>
        <div className="row">
        <div className="col-4 dayDay">{day()}</div>
            <div className="col-4">
              <span className="dayImg">
                <WeatherIcon code={props.data.weather[0].icon} size={30} />
              </span>
            </div>
            <div className="col-4 dayTemp">
              <span>{Math.round(props.data.temp.max)}°</span> |{" "} <span>{Math.round(props.data.temp.min)}°</span>
            </div>
            </div>
        </div>
    );
}