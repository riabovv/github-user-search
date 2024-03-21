import Logo from "@/app/components/Logo/Logo";
import Settings from "@/app/components/Settings/Settings";
import styles from "./header.module.css";
import { FunctionComponent } from "react";

type HeaderProps = {
  shouldLogoRedirect?: boolean;
};

const Header: FunctionComponent<HeaderProps> = ({ shouldLogoRedirect }) => (
  <header>
    <div className={styles.wrapper}>
      <Logo shouldRedirect={shouldLogoRedirect} />
      {/* <Settings /> */}
    </div>
  </header>
);

export default Header;
