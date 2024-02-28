"use client";

import { useLayoutEffect, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "../components/layout/Header/Header";
import searchUsers from "../utils/searchUsers";
import UserCard from "../types/userCard";
import LoadingSkeleton from "../components/LoadingSkeleton/LoadingSkeleton";
import styles from "./page.module.css";

const Search = () => {
  const searchParams = useSearchParams();
  const hasQueryParam = !!searchParams.get("q");

  const [userCards, setUserCards] = useState<UserCard[]>([]);

  useLayoutEffect(() => {
    if (!hasQueryParam) {
      redirect("/");
    }

    const findUsers = async () => {
      const inputValue = sessionStorage.getItem("search-value");

      if (inputValue) {
        const findedUsers = await searchUsers(inputValue);

        let usersToSave: UserCard[] = [];

        if (findedUsers) {
          findedUsers.forEach((user) => {
            usersToSave.push({
              nickname: user.login,
              avatarUrl: user.avatar_url,
              url: user.html_url,
            });
          });
        }

        setUserCards(usersToSave);
      }
    };

    findUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header shouldLogoRedirect />
      {userCards.length > 0 && (
        <div className={styles.wrapper}>
          {userCards.map((userCard) => {
            return (
              <div className={styles.cardWrapper} key={userCard.nickname}>
                <div className={styles.cardImage}>
                  <Image
                    src={userCard.avatarUrl}
                    alt={userCard.nickname}
                    width={240}
                    height={250}
                    priority={true}
                  />
                </div>
                <div className={styles.cardTitle}>
                  <a href={userCard.url}>{userCard.nickname}</a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {userCards.length === 0 && <LoadingSkeleton />}
    </>
  );
};

export default Search;
