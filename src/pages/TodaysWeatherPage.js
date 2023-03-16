import React from "react";
import WeatherCard from "../components/WeatherCard";
import Input from "../components/Input";
import MiniCards from "../components/MInicards";

const TodaysWeatherPage = () => {
  return (
    <>
      <Input />
      <WeatherCard />
      <MiniCards />
    </>
  );
};

export default TodaysWeatherPage;
