import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./logo.module.css";

const Logo = () => (
  <div className={styles.wrapper}>
    <FontAwesomeIcon icon={faSquareGithub} className={styles.icon} />
    <h1 className={styles.title}>Github User Search</h1>
  </div>
);

export default Logo;
