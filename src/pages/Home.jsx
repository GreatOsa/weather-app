import React, { useEffect, useReducer, useState } from "react";
import Header from "../components/Header";
import WeatherContainer from "../components/WeatherContainer";
import "./Home.css";
import Nav from "../components/nav";

const initialState = {
  status: "ready",
  weather: [],
  cityname: "Lagos",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        status: "loading",
      };
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
    case "Submit":
      return {
        ...state,
        cityname: action.payload,
      };

    default:
      throw new Error("Action unknown");
  }
}

export default function Home() {
  const [input, setInput] = useState(initialState.cityname);
  const [{ weather, status, cityname }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;

  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${cityname}&days=7&aqi=no&alerts=no`;

  useEffect(
    function () {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched data:", data);
          dispatch({ type: "dataRecieved", payload: data });
        })
        .catch((err) => console.log(err));
    },
    [URL]
  );
  // console.log(weather);
  // console.log(weather.main.feels_like);

  return (
    <div className="home">
      <Nav />
      <Header
        cityname={cityname}
        dispatch={dispatch}
        input={input}
        setInput={setInput}
      />
      <WeatherContainer weather={weather} status={status} />
    </div>
  );
}
