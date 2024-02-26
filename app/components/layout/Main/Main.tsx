import MainForm from "./MainForm/MainForm";
import styles from "./main.module.css";

const Main = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <span className={styles.title}>
          Search for any{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          user you want to find
        </span>
        <MainForm />
      </div>
    </main>
  );
};

export default Main;
