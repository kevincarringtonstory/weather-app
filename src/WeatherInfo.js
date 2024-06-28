import React from 'react';

function WeatherInfo({ data }) {
  return (
    <div className="weather-info">
      <h2>{data.name}</h2>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Condition: {data.weather[0].main}</p>
    </div>
  );
}

export default WeatherInfo;
