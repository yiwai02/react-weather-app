import React from "react";

import './App.css';

function App() {
  let weatherData = {
    city: "New York City",
    temperature: 20,
    date: "Monday, November 18, 2021",
    time: "12:00",
    description: "Sunny",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    humidity: 10,
    wind: 2
  };

  return (
    <div className="App">
      <div class="container">
        <h1>
          <span className="currentCity">{weatherData.city}</span>
          <hr />
        </h1>

        <form className="searchCity" />
        <div className="row">
          <div className="col-9 search-city">
            <input
              type="search"
              placeholder="enter city"
              className="search-city-input"
            />
            <input type="submit" className="btn btn-secondary" value="GO!" />
          </div>
          <div className="col-3 my-weather">
            <button type="button" className="btn btn-primary">
              My weather
            </button>
          </div>
        </div>

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
              <span className="currentTemp">{weatherData.temperature}</span>
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
                  <span className="wind-speed">{weatherData.wind}</span>
                  m/s
                </li>
              </ul>
            </div>
            <div className="col-6 wind-info"></div>
          </div>
        </div>
 </div>
 
    <footer>
      Opensource at <a href ="https://github.com/yiwai02/react-weather-app.git" target="blank">https://github.com/yiwai02/react-weather-app.git</a>
    </footer>
    </div>
  );
}

export default App;
