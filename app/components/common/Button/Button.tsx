"use client";

import { FunctionComponent, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  type: "submit" | "reset" | "button";
  children: ReactNode;
};

const Button: FunctionComponent<ButtonProps> = ({ type, children }) => (
  <button type={type} className={styles.defaultButton}>
    {children}
  </button>
);

export default Button;
