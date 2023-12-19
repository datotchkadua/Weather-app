import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import TodaysWeatherPage from "./pages/TodaysWeatherPage";
import TomorrowsWeatherPage from "./pages/TomorrowsWeatherPage";
import Forecast from "./pages/Forecast";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodaysWeatherPage />,
        errorElement: <ErrorPage />,
      },

      {
        path: "tomorrow", 
        element: <TomorrowsWeatherPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "forecast", 
        element: <Forecast />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
