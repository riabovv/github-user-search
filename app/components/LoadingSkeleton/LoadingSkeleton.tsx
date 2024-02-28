import styles from "./loadingSkeleton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const LoadingSkeleton = () => {
  const cards: number[] = Array(12).fill(12);

  return (
    <div className={styles.wrapper}>
      {cards.map((_, index) => {
        return (
          <div className={styles.cardWrapper} key={index}>
            <div className={styles.cardImage}>
              <div>
                <FontAwesomeIcon
                  icon={faImage}
                  className={styles.cardIconImage}
                />
              </div>
            </div>
            <div className={styles.cardTitle}></div>
          </div>
        );
      })}
    </div>
  );
};

export default LoadingSkeleton;
