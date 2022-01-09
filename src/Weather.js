import React, {useState} from "react";
import axios from "axios";

import Temperature from "./Temperature";
import DateNow from "./DateNow";
import TimeNow from "./TimeNow";
import WeatherIcon from "./WeatherIcon";
import Forcast from "./Forcast";

import './Weather.css';

export default function Weather (props){
   let [weatherData, setWeatherData] = useState({ready:false});
   let [city, setCity] = useState("");

   function handleResponse(response){
      setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      imgUrl: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      time: new Date(response.data.dt * 1000),

    });
   }

   function firstWeather(){
       let apiKey = "59990109c1a723b5b9dd0b82ee870827";
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

       axios.get(apiUrl).then(handleResponse);
   }

function handleSubmit(event){
    event.preventDefault();
    firstWeather();
}

   function handleCityChange(event){
       setCity(event.target.value);
   }

   if (weatherData.ready){
    return(
        <div className="SearchWeather">
            <h1>
          <span className="currentCity">{weatherData.city}</span>
          <hr />
        </h1>
        <form className="searchCity" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9 search-city">
            <input
              type="search"
              placeholder="enter city"
              className="search-city-input"
              onChange={handleCityChange}
            />
            <input type="submit" className="btn btn-secondary" value="GO!" />
          </div>
          <div className="col-3 my-weather">
            <button type="button" className="btn btn-primary">
              My city
            </button>
          </div>
        </div>
        </form>
         <div className="weatherToday">
          <div className="row">
            <div className="col-4 currentDT">
              <ul>
                Last updated:
                <DateNow date = {weatherData.date} />
                <TimeNow time = {weatherData.time} />
              </ul>
            </div>

            <div className="col-4">
            <Temperature celsius = {weatherData.temperature} />
            </div>
            <div className="col-4">
              <ul>
               <WeatherIcon code={weatherData.imgUrl} size={60} />
                <li className="weatherNow">{weatherData.description}</li>
              </ul>
            </div>

            <div className="col-6 wind-info">
              <ul>
                <li>
                  Humidity:
                  <span className="humidity">{weatherData.humidity}</span>%
                </li>
                <li>
                  Wind speed:
                  <span className="wind-speed">{Math.round(weatherData.wind)}</span>
                  m/s
                </li>
              </ul>
            </div>
          </div>
        </div>
          <Forcast coordinates={weatherData.coordinates} />
        </div>
    );
}else{
    return ( 
    <div className="SearchWeather">
            <h1>
          <span className="currentCity">Feeling the breeze at...?</span>
          <hr />
        </h1>
        <form className="searchCity" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9 search-city">
            <input
              type="search"
              placeholder="enter city"
              className="search-city-input"
              onChange={handleCityChange}
            />
            <input type="submit" className="btn btn-secondary" value="GO!" />
          </div>
          <div className="col-3 my-weather">
            <button type="button" className="btn btn-primary">
              My city
            </button>
          </div>
        </div>
        </form>
        </div>
        );}
}