import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [location, setLcation] = useState("Tbilisi");
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);

  
  const setTemperature = (name) => {
    if (name === "0") {
      setIsCelsius(true);
    } else if (name === "1") {
      setIsCelsius(false);
    } else return;
  };

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchData = async () => {
    if (location.trim().length > 0) {
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`
        )
        .then((res) => {
          setWeatherData(res.data);
        })
        .catch((err) => {
          setErrorMsg(err.response.data.error.message);
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 3000);
        });
    } else return;
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <GlobalContext.Provider
      value={{
        isError,
        errorMsg,
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
