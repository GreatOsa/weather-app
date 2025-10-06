import React from "react";
import Header from "../components/Header";
import WeatherContainer from "../components/WeatherContainer";
import "./Home.css";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className="home">
      <Nav />
      <Header />
      <WeatherContainer />
    </div>
  );
}
