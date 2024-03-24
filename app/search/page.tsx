"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import Image from "next/image";
import Header from "../components/layout/Header/Header";
import searchUsers from "../utils/searchUsers";
import UserCard from "../types/userCard";
import LoadingSkeleton from "../components/LoadingSkeleton/LoadingSkeleton";
import styles from "./page.module.css";
import Link from "next/link";
import BackToTop from "../components/common/BackToTop/BackToTop";
import Pagination from "../components/common/Pagination/Pagination";

const Search = () => {
  const searchParams = useSearchParams();
  const hasQueryParam = !!searchParams.get("q");
  const queryParam = searchParams.get("q") ?? "";
  const [amountOfUsersFound, setAmountOfUsersFound] = useState(0);
  const [userCards, setUserCards] = useState<UserCard[]>([]);
  const [perPage, setPerPage] = useState(0);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(amountOfUsersFound / perPage);

  const findUsers = async (page: number) => {
    const inputValue = sessionStorage.getItem("search-value");

    if (inputValue || queryParam) {
      const foundUsers = await searchUsers(inputValue || queryParam, page);

      let usersToSave: UserCard[] = [];

      if (foundUsers) {
        foundUsers.items.forEach((user) => {
          usersToSave.push({
            nickname: user.login,
            avatarUrl: user.avatar_url,
            url: user.html_url,
          });
        });

        setAmountOfUsersFound(foundUsers.totalAmount);
        setPerPage(foundUsers.perPage);
      }

      setUserCards(usersToSave);
    }
  };

  useEffect(() => {
    if (page > 1) {
      findUsers(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useLayoutEffect(() => {
    if (!hasQueryParam) {
      redirect("/");
    }

    findUsers(page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header shouldLogoRedirect />
      {userCards.length > 0 && (
        <>
          <div className={styles.foundUsersWrapper}>
            {amountOfUsersFound !== 0 && (
              <span className={styles.foundUsersTitle}>
                {amountOfUsersFound > 1 ? (
                  <>
                    <span className={styles.amount}>{amountOfUsersFound}</span>{" "}
                    users were found
                  </>
                ) : (
                  <>
                    <span className={styles.amount}>{amountOfUsersFound}</span>{" "}
                    user was found
                  </>
                )}
              </span>
            )}
          </div>
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
                    <Link href={`/${userCard.nickname}`}>
                      {userCard.nickname}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {totalPages !== 1 && (
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          )}
        </>
      )}

      {userCards.length === 0 && amountOfUsersFound < 1 && <LoadingSkeleton />}

      <BackToTop />
    </>
  );
};

export default Search;
