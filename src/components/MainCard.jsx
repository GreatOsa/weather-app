import styles from "./WeatherContainer.module.css";

export function MainCard() {
  return (
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
  );
}
