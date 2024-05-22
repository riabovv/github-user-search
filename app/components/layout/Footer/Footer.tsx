import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.wrapper}>
    <div>
      <i className={styles.text}>
        Developed by{" "}
        <a
          href="https://github.com/riabovv"
          target="_blank"
          rel="noopener noreferrer"
        >
          riabovv
        </a>
      </i>
    </div>
    <div>
      <i className={styles.text}>
        <a
          href="https://github.com/riabovv/github-user-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          View the source code
        </a>
      </i>
    </div>
  </footer>
);

export default Footer;
