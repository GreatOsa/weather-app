import React from "react";
import styles from "../WeatherContainer.module.css";
import nav from "../Nav.module.css";
import "./HourlyForecast.css";

export default function HourlyForecast() {
  return (
    <div className={`${styles.HourlyForecast} container`}>
      <span className="HourlyForecastTitle">
        <p>Hourly forecast</p>
        <div className={nav.navdropdown}>
          Tuesday
          <img src="/images/icon-dropdown.svg" alt="Arrow" />
          {/* <button className={styles.navbutton}></button> */}
        </div>
      </span>
      <div className="hourForecastList">
        <div className="hourlyList">
          <span className="imgAndTime">
            <img src="/public/images/icon-partly-cloudy.webp" alt="" />
            <p>3 PM</p>
          </span>
          <p>21°</p>
        </div>
        <div className="hourlyList">
          <span className="imgAndTime">
            <img src="/public/images/icon-partly-cloudy.webp" alt="" />
            <p>3 PM</p>
          </span>
          <p>21°</p>
        </div>
        <div className="hourlyList">
          <span className="imgAndTime">
            <img src="/public/images/icon-partly-cloudy.webp" alt="" />
            <p>3 PM</p>
          </span>
          <p>21°</p>
        </div>
        <div className="hourlyList">
          <span className="imgAndTime">
            <img src="/public/images/icon-partly-cloudy.webp" alt="" />
            <p>3 PM</p>
          </span>
          <p>21°</p>
        </div>
        <div className="hourlyList">
          <span className="imgAndTime">
            <img src="/public/images/icon-partly-cloudy.webp" alt="" />
            <p>3 PM</p>
          </span>
          <p>21°</p>
        </div>
        <div className="hourlyList">
          <span className="imgAndTime">
            <img src="/public/images/icon-partly-cloudy.webp" alt="" />
            <p>3 PM</p>
          </span>
          <p>21°</p>
        </div>
        <div className="hourlyList">
          <span className="imgAndTime">
            <img src="/public/images/icon-partly-cloudy.webp" alt="" />
            <p>3 PM</p>
          </span>
          <p>21°</p>
        </div>
      </div>
    </div>
  );
}
