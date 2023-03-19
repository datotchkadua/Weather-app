import React from "react";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import temperatureIcon from "../assets/temperature.svg";
import humidityImg from "../assets/humidity.png";
import visibilityImg from "../assets/visibility.png";
import windImg from "../assets/wind.png";
import MiniCard from "../components/Minicard";
import { useGlobalContext } from "../context";

const TommorowsWeatherPage = () => {
  const { weatherData, isCelsius } = useGlobalContext();
  const tommorow = weatherData?.forecast.forecastday[1];
  //console.log(tommorow?.hour);

  const epoch = tommorow?.date_epoch;
  const date = new Date(epoch * 1000);
  const dateString = date.toString().slice(0, 10);

  return (
    <>
      {weatherData ? (
        <div>
          <div className=" flex  justify-center p-5  ">
            <div
              className=" flex justify-center w-[50rem] p-7 text-white
       rounded-xl  
       bg-gradient-to-r from-[#AD36CB] to-[#333333] "
            >
              <div className=" w-2/5 p-4  flex flex-col ">
                <h1 className=" text-3xl">{`${weatherData.location.name}, ${weatherData.location.country}`}</h1>
                <h1 className="text-2xl mt-2">{dateString}</h1>
                <div className="flex  space-x-6 mt-5 mb-5 text-xl">
                  <div className="flex-col mt-4 space-y-2 ">
                    <img src={sunrise} alt="" className="w-16 h-16" />
                    <h4>{tommorow.astro.sunrise}</h4>
                  </div>
                  <div className="flex-col mt-4 space-y-2">
                    <img src={sunset} alt="" className="w-16 h-16" />
                    <h4>{tommorow.astro.sunset}</h4>
                  </div>
                </div>

                <div className="flex space-x-6 text-xl mt-5 mb-5">
                  <div className="flex flex-col   ">
                    <h4>LOWEST</h4>
                    <h4>
                      {isCelsius
                        ? tommorow.day.mintemp_c + "°C"
                        : tommorow.day.mintemp_f + "°F"}
                    </h4>
                  </div>
                  <div className="flex flex-col   ">
                    <h4>HIGHEST</h4>
                    <h4>
                      {isCelsius
                        ? tommorow.day.maxtemp_c + "°C"
                        : tommorow.day.maxtemp_f + "°F"}
                    </h4>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="w-3/5 p-4 ml-5 ">
                <div
                  className=" text-3xl flex justify-center items-center 
            space-x-3"
                >
                  <img
                    src={temperatureIcon}
                    alt="temperature"
                    className="w-5 h-12"
                  />
                  <h3>
                    {isCelsius
                      ? tommorow.day.avgtemp_c + "°C"
                      : tommorow.day.avgtemp_f + "°F"}
                  </h3>
                  <h3>{`${tommorow.day.condition.text}`}</h3>
                  <img
                    src={weatherData.current.condition.icon.replace(
                      "64x64",
                      "128x128"
                    )}
                    alt=""
                  />
                </div>

                <div className="flex justify-center items-center space-x-10 mt-9 text-xl ">
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <img src={humidityImg} alt="" className="w-14 h-14" />
                    <h3>{tommorow.day.avghumidity}%</h3>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <img src={visibilityImg} alt="" className="w-14 h-14" />
                    <h3>{tommorow.day.avgvis_km}km</h3>
                  </div>
                  <div className="flex flex-col justify-center items-center space-y-2">
                    <img src={windImg} alt="" className="w-14 h-14" />
                    <h3>{tommorow.day.maxwind_mph}mph</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap mb-10 w-full">
            {tommorow.hour
              .filter((_, i) => i % 3 === 0)
              .map((hourlyInfo, i) => {
                const {
                  time,
                  condition: { icon, text },
                  temp_c,
                  temp_f,
                } = hourlyInfo;
                const date = new Date(time);

                const hours = date.getHours();
                const minutes = date.getMinutes();
                const timeSuffix = hours >= 12 ? "PM" : "AM";
                const formattedHours = hours < 10 ? "0" + hours : hours;
                const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
                const formattedTime =
                  formattedHours + ":" + formattedMinutes + timeSuffix;
                return (
                  <MiniCard
                    key={i}
                    time={formattedTime}
                    weatherIcon={icon}
                    celsius={temp_c}
                    fahrenheit={temp_f}
                    conditionText={text}
                  />
                );
              })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TommorowsWeatherPage;
