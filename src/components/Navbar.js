import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const [temperatureValue, setTemperatureValue] = useState("0");
  const { weatherData, setTemperature } = useGlobalContext();

  useEffect(() => {
    setTemperature(temperatureValue);
  }, [temperatureValue]);

  const currentDate = weatherData?.location.localtime;

  const navigation = [
    { name: "Today", to: "/" },
    { name: "Tommorow", to: "/tommorow" },
    { name: "7-Day Forecast", to: "/forecast" },
  ];

  return (
    <div className=" flex justify-between w-full text-white mb-10 ">
      <div className="flex flex-col mr-10">
        <img src={logo} alt="logo" className="w-16 h-12 mt-2 ml-2" />
        <h1 className=" ml-14  leading-10 text-5xl">WeatherMe</h1>
        <p className=" flex justify-end text-xl">{currentDate}</p>
        <div className="flex ml-14 mt-6 space-x-1 justify-center items-center text-xl">
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
      <nav className="flex flex-row   p-4 mt-10 mr-14 text-2xl 	">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            className={({ isActive }) => {
              return (
                " p-3 h-1/2 rounded-md hover:underline  underline-offset-10 hover:text-yellow-300 duration-300 " +
                (isActive
                  ? "underline underline-offset-8 text-red-500 	 "
                  : null)
              );
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
