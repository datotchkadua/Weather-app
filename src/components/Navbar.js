import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const [temperatureValue, setTemperatureValue] = useState("0");
  const { weatherData, setTemperature } = useGlobalContext();

  useEffect(() => {
    setTemperature(temperatureValue);
  }, [temperatureValue]);

  console.log("temperatureValue from Navbar",temperatureValue);
  const currentDate = weatherData?.location?.localtime;

  return (
    <div className=" flex justify-between w-full text-white  ">
      <div className="flex flex-col mr-10">
        <img src={logo} alt="logo" className="w-16 h-12 mt-2 ml-2" />
        <h1 className=" ml-14  leading-10 text-5xl">WeatherMe</h1>
        <p className=" flex justify-end text-xl">{currentDate}</p>
        <div className="flex ml-14 mt-6 space-x-1 justify-center items-center">
          <h4>°C</h4>
          <input
            value={temperatureValue}
            onChange={(e) => setTemperatureValue(e.target.value)}
            type="range"
            className=" w-14 h-4 rounded-2xl appearance-none bg-gradient-to-r from-[#33E017] to-black   "
            min="0"
            max="1"
          ></input>
          <h4>°F</h4>
        </div>
      </div>
      <div className="flex flex-row space-x-9 mt-16 mr-32 text-2xl 	">
        <Link
          to="/"
          className="  hover:underline  underline-offset-8 hover:text-yellow-300 duration-300
          "
        >
          Today
        </Link>
        <Link
          to="/tommorow"
          className=" hover:underline  underline-offset-8 hover:text-yellow-300 duration-300"
        >
          Tommorow
        </Link>
        <Link
          to="/forecast"
          className="hover:underline  underline-offset-8 hover:text-yellow-300   duration-300  "
        >
          Monthly Forecast
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
