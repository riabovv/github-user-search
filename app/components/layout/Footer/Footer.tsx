import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.wrapper}>
    <i>
      Developed by{" "}
      <a
        href="https://github.com/riabovv"
        target="_blank"
        rel="noopener noreferrer"
      >
        riabovv
      </a>
    </i>
  </footer>
);

export default Footer;
