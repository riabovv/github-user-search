"use client";

import { FunctionComponent } from "react";
import styles from "./snackbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type SnackBarProps = {
  type?: "success" | "error";
  contentText: string;
  onClose: () => void;
};

const SnackBar: FunctionComponent<SnackBarProps> = ({
  type,
  contentText,
  onClose,
}) => {
  const red = "#df5959";
  const green = "#56b456";

  const lineBackgroundColor = {
    backgroundColor: type === "success" ? green : red,
  };
  const contentHeaderTextColor = {
    color: type === "success" ? green : red,
  };

  return (
    <div className={[styles.wrapper].join(" ")}>
      <div className={styles.contentWrapper}>
        <div className={styles.line} style={lineBackgroundColor}></div>
        <div className={styles.content}>
          <div className={styles.contentHeader} style={contentHeaderTextColor}>
            {!type && <span>Info</span>}

            {type === "success" ? <span>Success</span> : <span>Error</span>}
          </div>
          <div className={styles.contentText}>
            <span>{contentText}</span>
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
