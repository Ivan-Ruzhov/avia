import React from "react";
import { onSale, onFast, onOptimal } from "../actions/actions";
import { useDispatch } from "react-redux";
import classes from "./FilterHeader.module.scss";

const FilterHeader = () => {
  const dispatch = useDispatch();
  const onClick = (e) => {
    const list = e.currentTarget.querySelectorAll("button");
    if (!e.target.classList.contains(`${classes["filter__buttons-active"]}`)) {
      for (let i = 0; i < list.length; i++) {
        list[i].classList.remove(`${classes["filter__buttons-active"]}`);
      }
      e.target.classList.add(`${classes["filter__buttons-active"]}`);
    }
  };
  return (
    <div className={classes.filter} onClick={onClick}>
      <button
        className={`${classes.filter__buttons} ${classes["filter__button-cheap"]}`}
        onClick={() => dispatch(onSale())}
      >
        Самый дешевый
      </button>
      <button
        className={classes.filter__buttons}
        onClick={() => dispatch(onFast())}
      >
        Самый быстрый
      </button>
      <button
        className={`${classes.filter__buttons} ${classes["filter__button-optimal"]}`}
        onClick={() => dispatch(onOptimal())}
      >
        Оптималый
      </button>
    </div>
  );
};

export { FilterHeader };
