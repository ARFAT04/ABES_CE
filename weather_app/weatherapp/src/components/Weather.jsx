import { useState } from "react";
import "./weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "497d34ee0bb17d55986b3c85dc18c0e3";

  const getWeather = async () => {
    if (!city) return;

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const res = await fetch(url);

      if (!res.ok) {
        setError("City not found");
        setData(null);
        return;
      }

      const result = await res.json();
      setData(result);
      setError("");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>

      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {error && <p className="error">{error}</p>}

      {data && (
        <div className="weather-box">
          <h3>{data.name}</h3>
          <p>{data.weather[0].main}</p>
          <p>{data.main.temp}°C</p>
          <p>Humidity: {data.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}
