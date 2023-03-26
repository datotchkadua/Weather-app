import React from "react";
import { useGlobalContext } from "../context";
import Location from "../assets/location.svg";
import temperatureIcon from "../assets/temperature.svg";
import humidityImg from "../assets/humidity.png";
import visibilityImg from "../assets/visibility.png";
import windImg from "../assets/wind.png";
import presureImg from "../assets/pressure.png";
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
              className="  flex h-2/5 justify-center items-center 
            space-x-3"
            >
              <img
                src={temperatureIcon}
                alt="temperature"
                className="w-5 h-12"
              />
              <h3 className="text-2xl sm:text-3xl">
                {isCelsius
                  ? weatherData.current.temp_c + "°C"
                  : weatherData.current.temp_f + "°F"}
              </h3>
              <h3 className=" text-2xl sm:text-3xl">{`${weatherData.current.condition.text}`}</h3>
              <img
                src={weatherData.current.condition.icon.replace(
                  "64x64",
                  "128x128"
                )}
                alt=""
                className="w-16 sm:w-32  "
              />
            </div>
            <div className="flex   flex-wrap justify-around   mb-5 mt-5 pb-10   sm:mt-20 w-full  items-center">
              <div className="flex justify-center items-center flex-col  space-y-1 m-2 ">
                <img
                  src={humidityImg}
                  alt=""
                  className="w-7 h-7 sm:w-10 sm:h-10"
                />
                <p className="text-xs sm:text-lg">
                  {weatherData.current.humidity}%
                </p>
                <h4 className="text-xs sm:text-lg">HUMIDITY</h4>
              </div>
              <div className="flex justify-center items-center flex-col  space-y-1 m-2 ">
                <img
                  src={visibilityImg}
                  alt=""
                  className="w-7 h-7 sm:w-10 sm:h-10"
                />
                <p className="text-xs sm:text-lg">
                  {weatherData.current.vis_km}km
                </p>
                <h4 className="text-xs sm:text-lg">VISIBILITY</h4>
              </div>
              <div className="flex justify-center items-center flex-col  space-y-1 m-2 ">
                <img
                  src={presureImg}
                  alt=""
                  className="w-7 h-7 sm:w-10 sm:h-10"
                />
                <p className="text-xs sm:text-lg">
                  {weatherData.current.pressure_mb}hPa
                </p>
                <h4 className="text-xs sm:text-lg">AIR PRESSURE</h4>
              </div>

              <div className="flex justify-center items-center  flex-col space-y-1 m-2 ">
                <img src={windImg} alt="" className="w-7 h-7 sm:w-10 sm:h-10" />
                <p className="text-xs sm:text-lg">
                  {weatherData.current.wind_mph}mph
                </p>
                <h4 className="text-xs sm:text-lg">WIND</h4>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WeatherCard;
