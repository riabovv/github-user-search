"use client";

import { FunctionComponent, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  type: "submit" | "reset" | "button";
  children: ReactNode;
  onClick?: () => void;
};

const Button: FunctionComponent<ButtonProps> = ({
  type,
  children,
  onClick,
}) => (
  <button
    type={type}
    className={styles.defaultButton}
    onClick={onClick ? onClick : undefined}
  >
    {children}
  </button>
);

export default Button;
