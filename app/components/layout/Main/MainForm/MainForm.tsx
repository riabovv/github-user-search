"use client";

import { FormEvent, useState } from "react";
import MainInput from "@/app/components/common/MainInput/MainInput";
import styles from "./mainForm.module.css";
import Button from "@/app/components/common/Button/Button";
import SnackBar from "@/app/components/common/Snackbar/Snackbar";

const MainForm = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    setIsSnackbarOpen(true);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleFormSubmit}>
      <div className={styles.search}>
        <MainInput type="text" placeholder="Example: riabovv" />
        <Button type="submit">Search</Button>
      </div>

      {isSnackbarOpen && <SnackBar onClose={() => setIsSnackbarOpen(false)} />}
    </form>
  );
};

export default MainForm;
