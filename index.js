const PORT = 8000;

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

  
app.get("/api/weather", async (req, res) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
 const{ location }= req.query;
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=7&aqi=no&alerts=no`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {});
});

app.listen(8000, () => console.log(`server is running on ${PORT}`));
