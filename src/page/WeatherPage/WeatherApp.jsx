import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css';

const WeatherApp = () => {
  const [city, setCity] = useState('Seoul'); // 기본 값을 'Seoul'로 설정
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = 'd7b845e5df78442876b488521d1f6ef3'; // API Key

  const fetchWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      
      // 기상청 일반 API키  :  7qIlmVuNGV7pzIFYHRANmtd94tO1QGcC7a3hJRjj7lEshFvVHSRyw9AR9IhSHMoHYz2VV7uif6Wf5u517bNjlg%3D%3D


      // const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`;
      console.log(`Fetching weather data from: ${url}`); 
      

      const response = await axios.get(url);
      setWeatherData(response.data);
      setError(null); // 오류 초기화
    } catch (err) {
      console.error(err);  // 에러 콘솔 출력
      setError('날씨 정보를 가져오는 데 실패했습니다. 도시 이름을 확인해 주세요.');
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather();
    } else {
      setError('도시 이름을 입력해 주세요.');
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {weatherData && (
        <div className="weather-info">
          
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          <p> {weatherData.id}</p>
          <p>{weatherData.weather[0].icon}</p>
          {/* <p>{weatherData.main.temp_max}</p> */}

          {/* <p> {weatherData.main.temp}</p> */}
        </div>
      )}
    </div>
  );
};
  
export default WeatherApp;
