import { formatDate } from "../FormatDate";
import styles from "./WeatherContainer.module.css";
import "./mainCard.css";

export default function MainCard({ weather, status }) {
  // status should come from state, not dispatch
  // e.g., status = "loading" | "ready" | "error"

  if (status === "loading") {
    return <div className="loader"></div>;
  }

  return (
    <div className={styles.mainCard}>
      <div className={styles.countryAndDate}>
        <p className={styles.countryText}>
          {weather?.location?.name}, {weather?.location?.country}
        </p>
        <p className={styles.dateText}>
          {formatDate(weather?.location?.localtime.split(" ")[0])}
        </p>
      </div>

      <div className={styles.temperature}>
        <img
          className={styles.weatherIcon}
          src="/images/icon-sunny.webp" // ✅ fixed: no /public/
          alt="Sunny"
        />
        <h1>{weather?.current?.temp_c}°C</h1>
      </div>
    </div>
  );
}
