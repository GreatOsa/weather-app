import { MainCard } from "./MainCard";
import { DailyforecastContainer } from "./DailyforecastContainer";
import { WeatherBigContainer } from "./WeatherBigContainer";
import styles from "./WeatherContainer.module.css";
import HourlyForecast from "./weather/HourlyForecast";

export default function WeatherContainer() {
  return (
    <div className={styles.weatherContainer}>
      {/* this contain the country , date with temp */}
      <MainCard />
      {/* side container */}
      <HourlyForecast />

      <div className={`${styles.container1}`}>
        <div className={styles.temperatureInfo}>
          <p className={styles.tempName}>Feels like</p>
          <p className={styles.tempDeg}>18° </p>
        </div>
        <div className={styles.temperatureInfo}>
          <p className={styles.tempName}>Feels like</p>
          <p className={styles.tempDeg}>18° </p>
        </div>
        <div className={styles.temperatureInfo}>
          <p className={styles.tempName}>Feels like</p>
          <p className={styles.tempDeg}>18° </p>
        </div>
        <div className={styles.temperatureInfo}>
          <p className={styles.tempName}>Feels like</p>
          <p className={styles.tempDeg}>18° </p>
        </div>
      </div>
      <p>Daily forecast</p>
      <DailyforecastContainer />
    </div>
  );
}
