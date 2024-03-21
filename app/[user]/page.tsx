"use client";

import { useLayoutEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/layout/Header/Header";
import getUser from "../utils/getUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import getRepos from "../utils/getRepos";
import Repo from "../types/repo";
import { formatDateDifference } from "../utils/date";
import BackToTop from "../components/common/BackToTop/BackToTop";
import { MagnifyingGlass } from "react-loader-spinner";

const User = () => {
  const [userToShow, setUserToShow] = useState<User>();
  const [reposToShow, setReposToShow] = useState<Repo[]>([]);
  const [searchValue, setSearchValue] = useState<string | null>();
  const pathname = usePathname().split("/")[1];
  const router = useRouter();

  useLayoutEffect(() => {
    setSearchValue(sessionStorage.getItem("search-value"));

    const fetchUser = async () => {
      const user = await getUser(pathname);
      const repos = await getRepos(pathname);

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

      if (repos) {
        setReposToShow(
          repos.map((repo) => ({
            name: repo.name,
            updated: repo.updated_at,
            language: repo.language,
            url: repo.html_url,
          }))
        );
      }
    };

    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header shouldLogoRedirect />

      {searchValue && (
        <div className={styles.backToSearchWrapper}>
          <button onClick={() => router.back()}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back to search</span>
          </button>
        </div>
      )}

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
            {reposToShow.length > 0 && (
              <div className={styles.repositories}>
                <div className={styles.repositoriesTitleWrapper}>
                  <span>Public repositories</span>
                </div>
                <div className={styles.repositoryCardWrapper}>
                  {reposToShow.map((repo, index) => {
                    return (
                      <div className={styles.repositoryCard} key={index + 1}>
                        <div className={styles.repositoryCardTitle}>
                          <div className={styles.repositoryName}>
                            <a href={repo.url}>{repo.name}</a>
                          </div>
                          <div className={styles.dateOfUpdate}>
                            <span>
                              {formatDateDifference(repo.updated ?? "")}
                            </span>
                          </div>
                        </div>
                        <div className={styles.repositoryCardDevLang}>
                          <span>{repo.language}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {!userToShow && (
        <div className={styles.wrapper}>
          <div className={styles.magnifyingGlass}>
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="#fb8500"
            />
          </div>
        </div>
      )}

      <BackToTop />
    </>
  );
};

export default User;
