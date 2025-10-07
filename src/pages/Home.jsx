import React, { useEffect, useReducer } from "react";
import Header from "../components/Header";
import WeatherContainer from "../components/WeatherContainer";
import "./Home.css";
import Nav from "../components/nav";

const initialState = {
  status: "ready",
  weather: [],
  isDay: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        weather: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action unknown");
  }
}

export default function Home() {
  const [{ weather }, dispatch] = useReducer(reducer, initialState);

  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

  console.log(APIKEY);
  const cityname = "Abuja";
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityname}&days=7&aqi=no&alerts=no`;

  useEffect(function () {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched data:", data);
        dispatch({ type: "dataRecieved", payload: data });
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(weather);
  // console.log(weather.main.feels_like);

  return (
    <div className="home">
      <Nav />
      <Header />
      <WeatherContainer weather={weather} />
    </div>
  );
}
