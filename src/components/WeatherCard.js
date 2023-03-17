import React from "react";
import { useGlobalContext } from "../context";
import Location from "../assets/location.svg";
import temperatureIcon from "../assets/temperature.svg";
const WeatherCard = () => {
  const { weatherData, isCelsius } = useGlobalContext();
  //console.log(weatherData);
  return (
    <>
      {weatherData ? (
        <div className=" flex justify-center  p-5 ">
          <div
            className=" w-[50rem]  p-7 text-white
       rounded-xl  relative
       bg-gradient-to-r from-[#AD36CB] to-[#333333] "
          >
            <div className="flex space-x-2 ">
<h1 className=" text-2xl">{`${weatherData.location.name}, ${weatherData.location.country}`}</h1>              
              <img src={Location} alt="location" className=" w-10 h-10" />
              
            </div>

            <div
              className=" text-3xl flex h-2/5 justify-center items-center 
            space-x-3"
            >
              <img
                src={temperatureIcon}
                alt="temperature"
                className="w-5 h-12"
              />
              <h3>
                {isCelsius
                  ? weatherData.current.temp_c + "°C"
                  : weatherData.current.temp_f + "°F"}
              </h3>
              <h3>{`${weatherData.current.condition.text}`}</h3>
              <img
                src={weatherData.current.condition.icon.replace(
                  "64x64",
                  "128x128"
                )}
                alt=""
                className="  "
              />
            </div>
            <div className="flex justify-around mb-5 mt-20 w-full  items-center">
              <div className="flex justify-center items-center flex-col ">
                <h4>HUMIDITY</h4>
                <p>{weatherData.current.humidity}%</p>
              </div>
              <div className="flex justify-center items-center flex-col ">
                <h4>VISIBILITY</h4>
                <p>{weatherData.current.vis_km}km</p>
              </div>
              <div className="flex justify-center items-center flex-col ">
                <h4>AIR PRESSURE</h4>
                <p>{weatherData.current.pressure_mb}hPa</p>
              </div>
              <div className="flex justify-center items-center  flex-col ">
                <h4>WIND</h4>
                <p>{weatherData.current.wind_mph}mph</p>
              </div>
            </div>
          </div>
       
        </div>
      ) : null}
    </>
  );
};

export default WeatherCard;
