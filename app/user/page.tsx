"use client";

import { useLayoutEffect, useState } from "react";
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
  const [userToShow, setUserToShow] = useState<User>();

  useLayoutEffect(() => {
    const fetchUser = async () => {
      const user = await getUser("riabovv");

      if (user) {
        setUserToShow({
          img: user.avatar_url,
          name: user.name,
          login: user.login,
          bio: user.bio,
          blog: user.blog,
          followers: user.followers,
          following: user.following,
          repos: user.public_repos,
          location: user.location,
          url: user.html_url,
          profileDateOfUpdate: user.updated_at,
        });
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Header shouldLogoRedirect />
      {userToShow && (
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.avatar}>
              <Image
                src={userToShow.img}
                alt={`Avatar ${userToShow.login}`}
                priority={true}
                width={300}
                height={300}
                quality={100}
                className={styles.avatarImage}
                title={`User ${userToShow.login}`}
              />
            </div>
            <div className={styles.personalInfo}>
              <div className={styles.name}>
                <span>{userToShow.name}</span>
              </div>
              <div className={styles.bio}>
                <span>{userToShow.bio}</span>
              </div>
              {userToShow.location && (
                <div className={styles.location}>
                  <span>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className={styles.bioIcon}
                    />
                  </span>
                  <span>{userToShow.location}</span>
                </div>
              )}
              {userToShow.blog && (
                <div className={styles.blog}>
                  <a
                    href={userToShow.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className={styles.bioIcon}
                      />
                    </span>
                    <span>{userToShow.blog}</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className={styles.githubInfo}>
            <div className={styles.githubProfile}>
              <a
                href={userToShow.url ?? "google.com"}
                className={styles.ghProfileLink}
              >
                <span>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className={styles.externalLinkIcon}
                  />
                </span>
                <span>GitHub profile</span>
              </a>
            </div>
            <div className={styles.githubActivity}>
              <div className={styles.followersWrapper}>
                <span className={styles.githubActivityTitle}>Followers</span>
                <div className={styles.followers}>
                  <span>{userToShow.followers}</span>
                </div>
              </div>
              <div className={styles.followingWrapper}>
                <span className={styles.githubActivityTitle}>Following</span>
                <div className={styles.following}>
                  <span>{userToShow.following}</span>
                </div>
              </div>
              <div className={styles.reposWrapper}>
                <span className={styles.githubActivityTitle}>Repositories</span>
                <div className={styles.repos}>
                  <span>{userToShow.repos}</span>
                </div>
              </div>
            </div>
            <div className={styles.repositories}>
              <div className={styles.repositoriesTitleWrapper}>
                <span>Public repositories</span>
              </div>
              <div className={styles.repositoryCardWrapper}>
                <div className={styles.repositoryCard}>
                  <div className={styles.repositoryCardTitle}>
                    <div className={styles.repositoryName}>
                      <span>react-test-task</span>
                    </div>
                    <div className={styles.dateOfUpdate}>
                      <span>updated 2 months ago</span>
                    </div>
                  </div>
                  <div className={styles.repositoryCardDevLang}>
                    <span>HTML</span>
                  </div>
                </div>
                <div className={styles.repositoryCard}>
                  <div className={styles.repositoryCardTitle}>
                    <div className={styles.repositoryName}>
                      <span>react-test-task</span>
                    </div>
                    <div className={styles.dateOfUpdate}>
                      <span>updated 2 months ago</span>
                    </div>
                  </div>
                  <div className={styles.repositoryCardDevLang}>
                    <span>HTML</span>
                  </div>
                </div>
                <div className={styles.repositoryCard}>
                  <div className={styles.repositoryCardTitle}>
                    <div className={styles.repositoryName}>
                      <span>react-test-task</span>
                    </div>
                    <div className={styles.dateOfUpdate}>
                      <span>updated 2 months ago</span>
                    </div>
                  </div>
                  <div className={styles.repositoryCardDevLang}>
                    <span>HTML</span>
                  </div>
                </div>
                <div className={styles.repositoryCard}>
                  <div className={styles.repositoryCardTitle}>
                    <div className={styles.repositoryName}>
                      <span>react-test-task</span>
                    </div>
                    <div className={styles.dateOfUpdate}>
                      <span>updated 2 months ago</span>
                    </div>
                  </div>
                  <div className={styles.repositoryCardDevLang}>
                    <span>HTML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
