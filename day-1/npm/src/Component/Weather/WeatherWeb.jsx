// src/components/Weather.js

import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

function WeatherWeb() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: {
        location: `${location}`,
        format: "json",
        u: "c",
      },
      headers: {
        "x-rapidapi-key": "6bf03e8533mshe7c7b2224ee4eb2p12abb2jsn6758f4184dbd",
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      setWeather(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError("Error fetching weather data. Please try again later.");
      setWeather(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getWeather();
  };

  return (
    <>
    <link rel="stylesheet" href="weather.css" />
    <div className="body">
      <div className="input">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city"
          required
        />
        <button type="submit">Get Forecast</button>
      </form></div>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>Weather in {weather.location.city}</h2>
          <p>{weather.current_observation.wind.direction}</p>
          <p>
            Temperature: {weather.current_observation.condition.temperature}°C
          </p>
        </div>
      )}
    </div>
    </>
  );
}

export default WeatherWeb;
