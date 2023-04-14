import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FooterButton.module.scss";
import { moreTickets } from "../actions/actions";

const FooterButton = () => {
  const dispatch = useDispatch();
  const more = () => {
    dispatch(moreTickets());
  };
  return (
    <button className={classes["footer-button"]} onClick={more}>
      <span className={classes["footer-button__span"]}>
        Показать еще 5 билетов!
      </span>
    </button>
  );
};

export { FooterButton };
