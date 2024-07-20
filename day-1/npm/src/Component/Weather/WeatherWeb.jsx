import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

function WeatherWeb() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setloader] = useState(false);

  async function getWeather() {
    setloader(true);
    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: {
        location: `${location}`,
        format: "json",
        u: "c",
      },
      headers: {
        "x-rapidapi-key": "e74c9db67fmshb529a2663332ed4p15caedjsn4ea4171aa824",
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
      },
    };
    console.log(options);
    try {
      const response = await axios.request(options);
      setloader(false);

      console.log(response.data);

      setWeather(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Please try with Valid city Name");
      setWeather(null);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  if(loader){

    return <p>Loading...</p>
  }
  return (

   
    <>
    
      <link rel="stylesheet" href="weather.css" />
      
      <div className="weather-body">
        <div className="input">
          <h1>Check Weather here...</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City"
              required
            />
            <button type="submit" id="submit">
              Get Weather info
            </button>
          </form>
        </div>
        
        {error && <p>{error}</p>}
        {weather && (
          <div className="box">
            <h2>
              Weather in {weather.location.city} । {weather.location.country}
            </h2>

            <p>
              Temperature: {weather.current_observation.condition.temperature}
              °C । {weather.current_observation.condition.text}
            </p>
            <p>
              Lattitude:- {weather.location.lat} । 
              <span> Longitude:-{weather.location.long} </span>
            </p>
            <p>TimeZone:- {weather.location.timezone_id} </p>
            <p>Wind Direction:- {weather.current_observation.wind.direction} ।
            
              Chill:- {weather.current_observation.wind.chill}WCI ।  
              Speed:- {weather.current_observation.wind.speed} Km/h
            </p>

            <p>
              Humidity:- {weather.current_observation.atmosphere.humidity}% ।
              Visibility:- {weather.current_observation.atmosphere.visibility}Miles  ।
              Pressure:- {weather.current_observation.atmosphere.pressure}mb
            </p>

            <p>
              Sunrise:- {weather.current_observation.astronomy.sunrise} । 
              Sunset:- {weather.current_observation.astronomy.sunset}
            </p>
            
          </div>

        )}
      </div>
      
    </> 
  );
}

export default WeatherWeb;
