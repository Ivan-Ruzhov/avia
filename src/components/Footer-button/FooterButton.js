import React from "react";
import classes from "./FooterButton.module.scss";

const FooterButton = () => {
  return (
    <button className={classes["footer-button"]}>
      <span className={classes["footer-button__span"]}>
        Показать еще 5 билетов!
      </span>
    </button>
  );
};

export { FooterButton };
