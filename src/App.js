import React, { useState, useEffect } from 'react';
import CityInput from './CityInput';
import WeatherInfo from './WeatherInfo';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    document.title = 'Weather App';
  }, []);

  const fetchWeatherData = async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.cod && data.cod !== 200) {
        throw new Error(data.message || 'Failed to fetch weather data');
      }

      setWeatherData(data);
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <CityInput onWeatherRequest={fetchWeatherData} />
      {loading && <p>Loading weather data...</p>}
      {error && <p className="error">Error: {error}</p>}
      {weatherData && <WeatherInfo data={weatherData} />}
    </div>
  );
}

export default App;
