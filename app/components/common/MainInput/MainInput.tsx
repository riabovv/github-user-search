"use client";

import { ChangeEvent, FunctionComponent, useState } from "react";
import styles from "./mainInput.module.css";

type MainInputProps = {
  type: string;
  placeholder: string;
};

const MainInput: FunctionComponent<MainInputProps> = ({
  type,
  placeholder,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => setInputValue(value);

  return (
    <input
      type={type}
      value={inputValue}
      placeholder={placeholder}
      className={styles.field}
      onChange={handleInputChange}
    />
  );
};

export default MainInput;
