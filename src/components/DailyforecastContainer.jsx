import React from "react";
import styles from "./WeatherContainer.module.css";
import { getShortDay } from "../FormatDate";

export function DailyforecastContainer({ weather }) {
  const getNextWeek = (weatherData) => {
    // Each item in forecastday is a full day's forecast
    const forecastDays = weatherData?.forecast?.forecastday || [];

    // Return at most the next 7 days (or fewer if limited by API)
    return forecastDays.slice(0, 7);
  };

  const nextWeek = getNextWeek(weather);

  // console.log(nextWeek);

  return (
    <div className={styles.DailyforecastContainer}>
      {nextWeek.length > 0 ? (
        nextWeek.map((day, index) => (
          <div key={index} className={styles.forecastCard}>
            <p>{getShortDay(day.date)}</p>
            <img
              src={day.day?.condition?.icon || "/images/icon-sunny.webp"}
              alt={day.day?.condition?.text || "Weather icon"}
            />
            <div className={styles.row}>
              <p>{Math.round(day.day?.maxtemp_c)}°</p>
              <p>{Math.round(day.day?.mintemp_c)}°</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading daily forecast...</p>
      )}
    </div>
  );
}
