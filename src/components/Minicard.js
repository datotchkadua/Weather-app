import React from "react";
import { useGlobalContext } from "../context";
const Minicard = (props) => {
  const { isCelsius } = useGlobalContext();
  const { time, weatherIcon, conditionText, celsius, fahrenheit } = props;

  return (
    <div
      className="flex  flex-col justify-center items-center text-lg space-y-2 p-4 w-56  rounded-3xl
     text-white  m-5 bg-gradient-to-b from-[#AD36CB] to-[#333333]  "
    >
      <h4>{time}</h4>
      <h4> {conditionText}</h4>
      <img src={weatherIcon} alt="" />
      <h4> {isCelsius ? celsius + "°C" : fahrenheit + "°F"}</h4>
    </div>
  );
};

export default Minicard;
