import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const [temperatureValue, setTemperatureValue] = useState("0");
  const { weatherData, setTemperature } = useGlobalContext();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    setTemperature(temperatureValue);
  }, [temperatureValue]);

  const currentDate = weatherData?.location.localtime;

  const closeSidebar = () => {
    setMenuOpen(!menuOpen);
  };

  const navigation = [
    { name: "Today", to: "/" },
    { name: "Tommorow", to: "/tommorow" },
    { name: "3-Day Forecast", to: "/forecast" },
  ];

  return (
    <div
      className=" relative w-full  flex  items-center justify-between mx-auto
     text-white mb-10 "
    >
      <div className="flex justify-center flex-col mr-10">
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

      <div className=" hidden md:flex md:flex-row  p-4 mt-10 text-2xl 	">
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
      </div>
      <div className="md:hidden p-4 ">
        <button
          type="button"
          className={`z-50 block hamburger  focus:outline-none ${
            menuOpen ? "" : "open"
          }`}
          onClick={closeSidebar}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div
        className={` z-10 md:hidden absolute top-0 bottom-0 flex-col
         self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg
          text-white uppercase bg-black ${menuOpen ? "hidden" : "flex"}`}
      >
        {navigation.map((item) => (
          <NavLink
            onClick={closeSidebar}
            key={item.name}
            to={item.to}
            className={({ isActive }) => {
              return (
                " p-3  rounded-md hover:underline  underline-offset-10 hover:text-yellow-300 duration-300 " +
                (isActive
                  ? "underline underline-offset-8 text-red-500 	 "
                  : null)
              );
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
