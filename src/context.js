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

  const fetchData = async () => {
    if (location.trim().length > 0) {
      const options = {
        method: "GET",
        url: "http://localhost:8000/backend",
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
          setErrorMsg(error.response?.data);
          console.log(error);
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
