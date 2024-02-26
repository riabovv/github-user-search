"use client";

import MainInput from "@/app/components/common/MainInput/MainInput";
import styles from "./mainForm.module.css";
import Button from "@/app/components/common/Button/Button";
import { FormEvent } from "react";

const MainForm = () => {
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("submitted");
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleFormSubmit}>
      <div className={styles.search}>
        <MainInput type="text" placeholder="Example: riabovv" />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};

export default MainForm;
