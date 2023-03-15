import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [location, setLcation] = useState("Tbilisi");

  const setTemperature = (name) => {
    if (name === "0") {
      setIsCelsius(true);
    } else if (name === "1") {
      setIsCelsius(false);
    } else return;
  };
  console.log("contextis celsiusi ", isCelsius);
  console.log("contextis ლოკაცია ", location);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchData = async () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=5&aqi=no&alerts=no`
      )
      .then((res) => {
        //console.log( [res.data]);
        setWeatherData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  //console.log(weatherData);
  return (
    <GlobalContext.Provider
      value={{
        isCelsius,
        weatherData,
        location,
        setLcation,
        fetchData,
        setTemperature,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
