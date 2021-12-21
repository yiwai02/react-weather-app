import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forcast.css";

export default function Forcast() {
  return (
    <div className="weatherNext5">
      <div className="row">
        <div className="col-4 dayDay">Tomorrow</div>

        <div className="col-4">
          <span className="dayImg">
            <WeatherIcon code={"01n"} size={30} />
          </span>
        </div>

        <div className="col-4 dayTemp">
          <span>18°</span> | <span>10°</span>
        </div>
      </div>
    </div>
  );
}