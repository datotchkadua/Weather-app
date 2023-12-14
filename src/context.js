import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [location, setLocation] = useState("Tbilisi");
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const setTemperature = (name) => {
    if (name === "0") {
      setIsCelsius(true);
    } else if (name === "1") {
      setIsCelsius(false);
    } else return;
  };

  const fetchData = async () => {
    if (location.trim().length > 0) {
      const options = {
        method: "GET",
        url: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`,
        params: {
          weatherLocation: location,
        },
      };
      axios
        .request(options)
        .then((res) => {
          setWeatherData(res.data);
         

        })
        .catch((error) => {
          console.log(error)
          setErrorMsg(error?.message || "Something went wrong...");

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
        setLocation,
        fetchData,
        setTemperature,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
