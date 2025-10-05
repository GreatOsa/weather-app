import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <img src="/images/logo.svg" alt="Logo" />
      <div className={styles.navdropdown}>
        <img src="/images/icon-units.svg" alt="Location" />
        Units
        <img src="/images/icon-dropdown.svg" alt="Arrow" />
        {/* <button className={styles.navbutton}></button> */}
      </div>
    </nav>
  );
}
