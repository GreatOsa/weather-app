import React from "react";
import styles from "../WeatherContainer.module.css";
import nav from "../Nav.module.css";
import "./HourlyForecast.css";

export default function HourlyForecast({ weather }) {
  const getNextEightHours = (weatherData) => {
    const hours = weatherData?.forecast?.forecastday?.[0]?.hour || [];
    const currentHour = new Date().getHours();

    const nextHours = hours.filter((hourObj) => {
      const hour = new Date(hourObj.time).getHours();
      return hour >= currentHour && hour < currentHour + 8;
    });

    return nextHours;
  };

  const nextEightHours = getNextEightHours(weather);

  return (
    <div className={`${styles.HourlyForecast} container`}>
      <span className="HourlyForecastTitle">
        <p>Hourly forecast</p>
        <div className={nav.navdropdown}>
          {new Date(weather?.location?.localtime).toLocaleDateString("en-US", {
            weekday: "long",
          })}
          <img src="/images/icon-dropdown.svg" alt="Arrow" />
        </div>
      </span>

      <div className="hourForecastList">
        {nextEightHours.length > 0 ? (
          nextEightHours.map((hour, index) => (
            <div key={index} className="hourlyList">
              <span className="imgAndTime">
                <img src={hour.condition.icon} alt={hour.condition.text} />
                <p>
                  {new Date(hour.time).toLocaleTimeString([], {
                    hour: "numeric",
                    hour12: true,
                  })}
                </p>
              </span>
              <p>{hour.temp_c}°</p>
            </div>
          ))
        ) : (
          <p>Loading hourly data...</p>
        )}
      </div>
    </div>
  );
}
