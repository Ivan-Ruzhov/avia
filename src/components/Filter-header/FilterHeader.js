import React from "react";
import classes from "./FilterHeader.module.scss";

const FilterHeader = () => {
  return (
    <div className={classes.filter}>
      <button
        className={`${classes.filter__buttons} ${classes["filter__button-cheap"]}`}
      >
        <span className={classes.filter__span}>Самый дешевый</span>
      </button>
      <button className={classes.filter__buttons}>
        <span className={classes.filter__span}>Самый быстрый</span>
      </button>
      <button
        className={`${classes.filter__buttons} ${classes["filter__button-optimal"]}`}
      >
        <span className={classes.filter__span}>Оптималый</span>
      </button>
    </div>
  );
};

export { FilterHeader };
