"use client";

import { FunctionComponent } from "react";
import styles from "./snackbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type SnackBarProps = {
  type: "success" | "error" | "info";
  onClose: () => void;
};

const SnackBar: FunctionComponent<SnackBarProps> = ({ type, onClose }) => {
  return (
    <div className={[styles.wrapper, styles.snackbarInfo].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.line}></div>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <span>Info</span>
          </div>
          <div className={styles.contentText}>
            <span>Loading...</span>
          </div>
        </div>
        <div className={styles.action}>
          <button onClick={onClose} className={styles.closeButton}>
            <FontAwesomeIcon icon={faXmark} className={styles.iconXmark} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SnackBar;
