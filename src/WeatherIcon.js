import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
const codeMapping = {
  "01d": 'CLEAR_DAY',
  "01n": 'CLEAR_NIGHT',
  "02d": 'PARTLY_CLOUDY_DAY',
  "02n": 'PARTLY_CLOUDY_NIGHT',
  "03d": 'CLOUDY',
  "03n": 'CLOUDY',
  "04d": 'CLOUDY',
  "04n": 'CLOUDY',
  "09d": 'RAIN',
  "09n": 'RAIN',
  "10d": 'RAIN',
  "10n": 'RAIN',
  "11d": 'RAIN',
  "11n": 'RAIN',
  "13d": 'SNOW',
  "13n": 'SNOW',
  "50d": 'FOG',
  "50n": 'FOG',
};

const codeColor = {
  "01d": 'Yellow',
  "01n": 'Black',
  "02d": 'Yellow',
  "02n": 'Black',
  "03d": 'Grey',
  "03n": 'Black',
  "04d": 'Grey',
  "04n": 'Black',
  "09d": 'Light blue',
  "09n": 'blue',
  "10d": 'Light blue',
  "10n": 'blue',
  "11d": 'Light blue',
  "11n": 'blue',
  "13d": 'Light blue',
  "13n": 'blue',
  "50d": 'Grey',
  "50n": 'Grey',
};

const defaults ={
  animate: true
}
    return(
        <div>
     <li>
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color={codeColor[props.code]}
    size={props.size}
    animate={defaults.animate}
  />
  </li>
    </div>
);
}