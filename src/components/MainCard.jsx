import { formatDate } from "../FormatDate";
import styles from "./WeatherContainer.module.css";

export default function MainCard({ weather }) {
  console.log(weather);
  return (
    <div className={styles.mainCard}>
      <div className={styles.countryAndDate}>
        <p className={styles.countryText}>
          {weather?.location?.name}, {weather?.location?.country}
        </p>
        <p className={styles.dateText}>
          {formatDate(weather?.location?.localtime.split(" ")[0])}
          {/* ,{" "}{weather?.location?.localtime.split(" ")[0]} */}
        </p>
      </div>
      <div className={styles.temperature}>
        <img
          className={styles.weatherIcon}
          src="/public/images/icon-sunny.webp"
          alt="Sunny"
        />
        <h1>{weather?.current?.temp_c}°F</h1>
      </div>
    </div>
  );
}
