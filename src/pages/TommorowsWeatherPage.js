import React from 'react'
import { useGlobalContext } from "../context";

const TommorowsWeatherPage = () => {
   const { weatherData} = useGlobalContext();
    const tommorow = weatherData?.forecast.forecastday[1];
    console.log(tommorow);
  return (
    <div>TommorowsWeatherPage</div>
  )
}

export default TommorowsWeatherPage