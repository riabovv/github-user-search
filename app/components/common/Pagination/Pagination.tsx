import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./pagination.module.css";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FunctionComponent, useState } from "react";

type PaginationProps = {
  page: number;
  totalPages: number;
  setPage: (prevValue: any) => void;
};

const Pagination: FunctionComponent<PaginationProps> = ({
  page,
  totalPages,
  setPage,
}) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handlePageIncrement = () => {
    setPage((prevValue: number) => {
      if (prevValue === 1) {
        return prevValue;
      } else {
        return prevValue - 1;
      }
    });
  };

  const handlePageDecrement = () => {
    setPage((prevValue: number) => {
      if (prevValue === totalPages) {
        return prevValue;
      } else {
        return prevValue + 1;
      }
    });
  };

  const handleInputBlur = () => {
    if (inputValue && +inputValue <= totalPages && +inputValue > 0) {
      setPage(+inputValue);
    }

    setIsInputVisible(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.paginationWrapper}>
        <div className={styles.arrowLeft}>
          <button onClick={handlePageIncrement} disabled={page === 1}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        </div>
        <div className={styles.amountOfPages}>
          <span className={styles.amountOfPagesText}>
            {!isInputVisible ? (
              <button
                className={styles.amountOfPages}
                onClick={() => setIsInputVisible(true)}
              >
                {page}
              </button>
            ) : (
              <input
                className={styles.amountOfPagesInput}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                onBlur={handleInputBlur}
                autoFocus
              />
            )}{" "}
            of {totalPages}
          </span>
        </div>
        <div className={styles.arrowRight}>
          <button onClick={handlePageDecrement} disabled={page === totalPages}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
