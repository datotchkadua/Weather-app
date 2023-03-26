import React from "react";

import MiniCard from "../components/Minicard";
import { useGlobalContext } from "../context";

const Forecast = () => {
  const { weatherData } = useGlobalContext();
  const weeklyInfoArray = weatherData?.forecast.forecastday;
 
  return (
    <>
      {weatherData ? (
        <div className=" flex flex-col  justify-center items-center p-5">
          <h1 className=" text-3xl sm:text-5xl text-white mb-10">{`${weatherData.location.name}, ${weatherData.location.country}`}</h1>
          <div className="flex  flex-wrap justify-center p-3  ">
            {weeklyInfoArray.map((weekDay, i) => {
              const {
                date_epoch,
                day: {
                  avgtemp_c,
                  avgtemp_f,
                  condition: { text, icon },
                },
              } = weekDay;
              const date = new Date(date_epoch * 1000);
              const dateString = date.toString().slice(0, 10);
              return (
                <MiniCard
                  key={i}
                  time={dateString}
                  conditionText={text}
                  weatherIcon={icon}
                  celsius={avgtemp_c}
                  fahrenheit={avgtemp_f}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Forecast;
