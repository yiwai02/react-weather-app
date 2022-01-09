import React, {useState} from "react";
import DateForcast from "./DateForcast";
import axios from "axios";

import "./Forcast.css";

export default function Forcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);

  function handleResponse(response){
    setForcast(response.data.daily);
    setLoaded(true);
  }

  if (loaded){
    console.log(forcast);
    return (
        <div className="weatherNext5">
            <DateForcast data = {forcast[0]} />
        </div>
      );
    }else{
  let apiKey = "59990109c1a723b5b9dd0b82ee870827"; 
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return null;}
}