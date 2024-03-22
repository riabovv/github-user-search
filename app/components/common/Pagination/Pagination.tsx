import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./pagination.module.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Pagination = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.wrapper}>
      <div className={styles.paginationWrapper}>
        <div className={styles.arrowLeft}>
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className={styles.amountOfPages}>
          <span>
            {!isInputVisible ? (
              <button
                className={styles.amountOfPages}
                onClick={() => setIsInputVisible(true)}
              >
                3
              </button>
            ) : (
              <input
                className={styles.amountOfPagesInput}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onBlur={() => setIsInputVisible(false)}
                autoFocus
              />
            )}{" "}
            of 10
          </span>
        </div>
        <div className={styles.arrowRight}>
          <button>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
