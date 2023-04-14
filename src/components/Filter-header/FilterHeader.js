import React from "react";
import { onSale, onFast, onOptimal } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FilterHeader.module.scss";

const FilterHeader = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.active);
  return (
    <div className={classes.filter}>
      <button
        className={`${classes.filter__buttons} ${classes["filter__button-cheap"]}`}
        onClick={() => dispatch(onSale())}
      >
        <span className={classes.filter__span}>Самый дешевый</span>
      </button>
      <button
        className={classes.filter__buttons}
        onClick={() => dispatch(onFast())}
      >
        <span className={classes.filter__span}>Самый быстрый</span>
      </button>
      <button
        className={`${classes.filter__buttons} ${classes["filter__button-optimal"]}`}
        onClick={() => dispatch(onOptimal())}
      >
        <span className={classes.filter__span}>Оптималый</span>
      </button>
    </div>
  );
};

export { FilterHeader };
