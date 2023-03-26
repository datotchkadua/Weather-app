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

  const epoch = tommorow?.date_epoch;
  const date = new Date(epoch * 1000);
  const dateString = date.toString().slice(0, 10);

  return (
    <>
      {weatherData ? (
        <div>
          <div className=" flex  justify-center p-5  ">
            <div
              className=" flex flex-col justify-center w-[50rem] p-7 text-white
       rounded-xl  
       bg-gradient-to-r from-[#AD36CB] to-[#333333] "
            >
              <div className="flex justify-center items-center">
                <h1 className=" text-3xl mr-8">{`${weatherData.location.name}, ${weatherData.location.country}`}</h1>
                <h1 className="text-xl ">{dateString}</h1>
              </div>
              {/* amis zemot mtavari amindi */}

              {/*  */}
              <div className=" p-4 ml-5 ">
                <div
                  className=" text-lg sm:text-3xl flex my-5 justify-center items-center 
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
                    className="w-16 sm:w-32 "
                  />
                </div>
                <div className="flex justify-center text-md sm:text-2xl space-x-6  mt-5 mb-10">
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

                <div className="flex flex-wrap justify-center  items-center  space-x-5 sm:space-x-10 mt-5 text-xl ">
                  {/*  */}

                  <div className="flex-col justify-center items-center text-center mt-2  space-y-2 ">
                    <img
                      src={sunrise}
                      alt=""
                      className="w-7 h-7 sm:w-10 sm:h-10"
                    />
                    <h4 className="text-xs sm:text-lg">
                      {tommorow.astro.sunrise}
                    </h4>
                  </div>
                  <div className="flex-col justify-center items-center text-center mt-2  space-y-2">
                    <img
                      src={sunset}
                      alt=""
                      className="w-7 h-7 sm:w-10 sm:h-10"
                    />
                    <h4 className="text-xs sm:text-lg">
                      {tommorow.astro.sunset}
                    </h4>
                  </div>

                  {/*  */}
                  <div className="flex flex-col justify-center items-center mt-2 space-y-2">
                    <img
                      src={humidityImg}
                      alt=""
                      className="w-7 h-7 sm:w-10 sm:h-10"
                    />
                    <h4 className="text-xs sm:text-lg">
                      {tommorow.day.avghumidity}%
                    </h4>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-2 space-y-2">
                    <img
                      src={visibilityImg}
                      alt=""
                      className="w-7 h-7 sm:w-10 sm:h-10"
                    />
                    <h4 className="text-xs sm:text-lg">
                      {tommorow.day.avgvis_km}km
                    </h4>
                  </div>
                  <div className="flex flex-col justify-center items-center mt-2 space-y-2">
                    <img
                      src={windImg}
                      alt=""
                      className="w-7 h-7 sm:w-10 sm:h-10"
                    />
                    <h4 className="text-xs sm:text-lg">
                      {tommorow.day.maxwind_mph}mph
                    </h4>
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
