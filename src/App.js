import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import TodaysWeatherPage from "./pages/TodaysWeatherPage";
import TommorowsWeatherPage from "./pages/TommorowsWeatherPage";
import Forecast from "./pages/Forecast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<TodaysWeatherPage />} />
          <Route path="/tommorow" element={<TommorowsWeatherPage />} />
          <Route path="/forecast" element={<Forecast />} />
          <Route
            path="*"
            element={<h1 className="text-4xl">Page not found</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
