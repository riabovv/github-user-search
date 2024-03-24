"use client";

import { useLayoutEffect, useState } from "react";
import styles from "./page.module.css";
import Header from "../components/layout/Header/Header";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MagnifyingGlass } from "react-loader-spinner";

const Loading = () => {
  const [searchValue, setSearchValue] = useState<string | null>();
  const router = useRouter();

  useLayoutEffect(() => {
    setSearchValue(sessionStorage.getItem("search-value"));
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

      <div className={styles.wrapper}>
        <div className={styles.magnifyingGlass}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#fb8500"
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
