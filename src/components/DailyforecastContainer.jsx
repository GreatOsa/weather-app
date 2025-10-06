import styles from "./WeatherContainer.module.css";

export function DailyforecastContainer() {
  return (
    <div className={`${styles.DailyforecastContainer}`}>
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
  );
}
