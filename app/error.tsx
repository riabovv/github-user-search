"use client";

import { FunctionComponent } from "react";
import Button from "./components/common/Button/Button";
import "./styles/error.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error: FunctionComponent<ErrorProps> = ({ error, reset }) => {
  return (
    <div className="error-warn">
      <div className="wrapper">
        <div className="title">
          <FontAwesomeIcon icon={faTriangleExclamation} className="warn-icon" />
          <span>Something went wrong</span>
        </div>
        <span className="message">{error.message}</span>
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
      </div>
    </div>
  );
};

export default Error;
