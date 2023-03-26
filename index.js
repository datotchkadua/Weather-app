const PORT = 8000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const location = req.query.weatherLocation;

  const options = {
    method: "GET",
    url: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`,
    headers: {
      "x-weatherapi-key": apiKey,
    },
    params: {
      weatherLocation: location,
    },
  };
  console.log(options);
  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    res.status(400).send("No matching location found");
  }
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
