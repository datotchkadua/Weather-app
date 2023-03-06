import React, { useState } from "react";
import axios from "axios";

function App() {
  const [weatherData, setWeatherData] = useState([]);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
 

  console.log(weatherData);
  const fetchData = async () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&aqi=no`
      )
      .then((res) => {
        setWeatherData([res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <button className="bg-purple-400" onClick={fetchData}>
        Fetch Data
      </button>
    </div>
  );
}

export default App;
