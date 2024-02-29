"use client";

import { useLayoutEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Header from "../components/layout/Header/Header";
import getUser from "../utils/getUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faEnvelope,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const User = () => {
  useLayoutEffect(() => {
    const fetchUser = async () => {
      const user = await getUser("riabovv");
    };

    fetchUser();
  }, []);

  return (
    <>
      <Header shouldLogoRedirect />
      <div className={styles.wrapper}>
        <div className="info">
          <div className="avatar">
            <Image
              src="https://avatars.githubusercontent.com/u/29377060?v=4"
              alt="Avatar"
              width={300}
              height={300}
              className={styles.avatarImage}
              title="User nickname"
            />
          </div>
          <div className={styles.personalInfo}>
            <div className={styles.name}>
              <span>Vadym</span>
            </div>
            <div className={styles.bio}>
              <span>Frontend developer</span>
            </div>
            <div className={styles.email}>
              <a href="mailto:vadymriabov@gmail.com">
                <span className={styles.bioIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={styles.bioIcon}
                  />
                </span>
                <span>vadymriabov@gmail.com</span>
              </a>
            </div>
            <div className={styles.location}>
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className={styles.bioIcon}
                />
              </span>
              <span>Warsaw</span>
            </div>
            <div className={styles.blog}>
              <a
                href="https://riabovv.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.bioIcon}>
                  <FontAwesomeIcon icon={faGlobe} className={styles.bioIdon} />
                </span>
                <span>riabovv.github.io</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.githubProfile}>
            <a href="#" className={styles.ghProfileLink}>
              <span>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className={styles.externalLinkIcon}
                />
              </span>
              <span>GitHub profile</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
