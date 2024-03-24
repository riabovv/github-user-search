import Link from "next/link";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./logo.module.css";
import { FunctionComponent } from "react";

type LogoProps = {
  shouldRedirect?: boolean;
};

const LogoContent = () => (
  <>
    <FontAwesomeIcon icon={faSquareGithub} className={styles.icon} />
    <h1 className={styles.title}>Github User Search</h1>
  </>
);

const RedirectableLogo = () => (
  <Link href="/" className={styles.wrapper}>
    <LogoContent />
  </Link>
);

const RegularLogo = () => (
  <div className={styles.wrapper}>
    <LogoContent />
  </div>
);

const Logo: FunctionComponent<LogoProps> = ({ shouldRedirect }) => {
  return <>{shouldRedirect ? <RedirectableLogo /> : <RegularLogo />}</>;
};

export default Logo;
