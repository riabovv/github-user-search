import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./settings.module.css";

const Settings = () => (
  <div className={styles.wrapper}>
    <FontAwesomeIcon icon={faBars} className={styles.icon} />
  </div>
);

export default Settings;
