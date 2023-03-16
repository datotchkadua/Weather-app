import React from "react";
import { useGlobalContext } from "../context";
import MiniCard from "./Minicard";

const MInicards = () => {
  const { weatherData } = useGlobalContext();
  const hourlyInfoArray = weatherData?.forecast.forecastday[0].hour;
  const filteredHourlyInfo = hourlyInfoArray?.filter((_, i) => i % 3 === 0);
  //console.log(hourlyInfoArray);
  //console.log(filteredHourlyInfo);
  return (
    <div className="flex justify-center flex-wrap mb-10 w-full">
      {filteredHourlyInfo?.map((hourlyInfo, i) => {
        const {
          time,
          condition: { icon, text },
          temp_c,
          temp_f,
        } = hourlyInfo;
       
        return (
          <MiniCard
            key={i}
            time={time}
            weatherIcon={icon}
            celsius={temp_c}
            fahrenheit={temp_f}
            conditionText={text}
          />
        );
      })}
    </div>
  );
};

export default MInicards;
