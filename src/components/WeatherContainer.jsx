import MainCard from "./MainCard";
import { DailyforecastContainer } from "./DailyforecastContainer";
import { WeatherBigContainer } from "./WeatherBigContainer";
import styles from "./WeatherContainer.module.css";
import HourlyForecast from "./weather/HourlyForecast";

export default function WeatherContainer({ weather, formatDate }) {
  return (
    <div className={styles.weatherContainer}>
      {/* this contain the country , date with temp */}
      <MainCard weather={weather} formatDate={formatDate} />
      {/* side container */}
      <HourlyForecast weather={weather} />

      <div className={`${styles.container1}`}>
        <div className={styles.temperatureInfo}>
          <p className={styles.tempName}>Feels like</p>
          <p className={styles.tempDeg}>{weather?.current?.feelslike_c} </p>
        </div>
        <div className={styles.temperatureInfo}>
          <p className={styles.tempName}>Humidity </p>
          <p className={styles.tempDeg}>{weather?.current?.humidity}%</p>
        </div>
        <div className={styles.temperatureInfo}>
          <p className={styles.tempName}>Wind</p>
          <p className={styles.tempDeg}>{weather?.current?.wind_mph} mph </p>
        </div>
        <div className={styles.temperatureInfo}>
          <p className={styles.tempName}>Precipitation</p>
          <p className={styles.tempDeg}>{weather?.current?.precip_mm}</p>
        </div>
      </div>
      <p>Daily forecast</p>
      <DailyforecastContainer weather={weather} />
    </div>
  );
}
