import React from "react";
import "./App.css";

export default function Forcast() {
  return (
    <div className="weatherNext5">
      <div className="row">
        <div className="col-4 dayDay">Tomorrow</div>

        <div className="col-4">
          <span className="dayImg">
            <i className="fas fa-cloud"></i>
          </span>
        </div>

        <div className="col-4 dayTemp">
          <span>18°</span>|<span>10°</span>
        </div>
      </div>
    </div>
  );
}