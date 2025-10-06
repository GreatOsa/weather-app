import { WeatherBigContainer } from "./WeatherBigContainer";
import styles from "./WeatherContainer.module.css";

export default function WeatherContainer() {
  return (
    <div>
      <div className={styles.weatherContainer}>
        {/* this contain the country , date with temp */}
        <div className={styles.mainCard}>
          <div className={styles.countryAndDate}>
            <p className={styles.countryText}>Berlin, Germany</p>
            <p className={styles.dateText}>Tuesday, Aug 5, 2000 </p>
          </div>
          <div className={styles.temperature}>
            <img
              className={styles.weatherIcon}
              src="/public/images/icon-sunny.webp"
              alt="Sunny"
            />
            <h1>21°</h1>
          </div>
        </div>

        {/* side container */}
        <div className={styles.sideContainer}></div>

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
        <div className={`${styles.forecastContainer}`}>
          <div className={styles.forecastCard}>
            <p>Tue</p>
            <img src="/images/icon-storm.webp" alt="" />
            <div className={styles.row}>
              <p>21°</p>
              <p>12°</p>
            </div>
          </div>
          <div className={styles.forecastCard}>
            <p>Tue</p>
            <img src="/images/icon-storm.webp" alt="" />
            <div className={styles.row}>
              <p>21°</p>
              <p>12°</p>
            </div>
          </div>
          <div className={styles.forecastCard}>
            <p>Tue</p>
            <img src="/images/icon-storm.webp" alt="" />
            <div className={styles.row}>
              <p>21°</p>
              <p>12°</p>
            </div>
          </div>
          <div className={styles.forecastCard}>
            <p>Tue</p>
            <img src="/images/icon-storm.webp" alt="" />
            <div className={styles.row}>
              <p>21°</p>
              <p>12°</p>
            </div>
          </div>
          <div className={styles.forecastCard}>
            <p>Tue</p>
            <img src="/images/icon-storm.webp" alt="" />
            <div className={styles.row}>
              <p>21°</p>
              <p>12°</p>
            </div>
          </div>
          <div className={styles.forecastCard}>
            <p>Tue</p>
            <img src="/images/icon-storm.webp" alt="" />
            <div className={styles.row}>
              <p>21°</p>
              <p>12°</p>
            </div>
          </div>
          <div className={styles.forecastCard}>
            <p>Tue</p>
            <img src="/images/icon-storm.webp" alt="" />
            <div className={styles.row}>
              <p>21°</p>
              <p>12°</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
