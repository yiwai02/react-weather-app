import React, {useState} from "react";
import axios from "axios";
import './Weather.css';

export default function Weather (props){
   let [weatherData, setWeatherData] = useState({ready:false});
   let [city, setCity] = useState("");

   function handleResponse(response){
       console.log(response);
      setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      imgUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
   }

   function firstWeather(){
       console.log(city);
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
              My weather
            </button>
          </div>
        </div>
        </form>
         <div className="weatherToday">
          <div className="row">
            <div className="col-4 currentDT">
              <ul>
                Last updated:
                <li className="currentDate">{weatherData.date}</li>
                <li className="currentTime">{weatherData.time}</li>
              </ul>
            </div>

            <div className="col-4">
              <span className="currentTemp">{Math.round(weatherData.temperature)}</span>
              <span className="tempId">
                <b>°C</b>
              </span>
            </div>

            <div className="col-4">
              <ul>
                <li>
                  <img
                    src={weatherData.imgUrl}
                    alt={weatherData.description}
                    className="weatherTodayIcon"
                  />
                </li>
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
            <div className="col-6 wind-info"></div>
          </div>
        </div>
        </div>
    );
}else{
    return ( 
    <div className="SearchWeather">
            <h1>
          <span className="currentCity">Loading...</span>
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
              My weather
            </button>
          </div>
        </div>
        </form>
        </div>
        );}
}