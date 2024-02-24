import Logo from "@/app/components/Logo/Logo";
import Settings from "@/app/components/Settings/Settings";
import styles from "./header.module.css";

const Header = () => (
  <header>
    <div className={styles.wrapper}>
      <Logo />
      <Settings />
    </div>
  </header>
);

export default Header;
