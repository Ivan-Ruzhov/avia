import React from "react";
import classes from "./FilterMenu.module.scss";

const FilterMenu = () => {
  return (
    <div className={classes["side-menu"]}>
      <h2 className={classes["side-menu__header"]}>Количетсво пересадок</h2>
      <div className={classes["checkbox-containers"]}>
        <input
          className={classes["checkbox-containers__checkbox"]}
          type="checkbox"
          id="All"
          value="Все"
        />
        <label className={classes["checkbox-containers__label"]} htmlFor="All">
          Все
        </label>
      </div>
      <div className={classes["checkbox-containers"]}>
        <input
          className={classes["checkbox-containers__checkbox"]}
          type="checkbox"
          id="No-transfer"
          value="Без пересадок"
        />
        <label
          className={classes["checkbox-containers__label"]}
          htmlFor="No-transfer"
        >
          Без пересадок
        </label>
      </div>
      <div className={classes["checkbox-containers"]}>
        <input
          className={classes["checkbox-containers__checkbox"]}
          type="checkbox"
          id="One-transfer"
          value="1 пересадка"
        />
        <label
          className={classes["checkbox-containers__label"]}
          htmlFor="One-transfer"
        >
          1 пересадка
        </label>
      </div>
      <div className={classes["checkbox-containers"]}>
        <input
          className={classes["checkbox-containers__checkbox"]}
          type="checkbox"
          id="Two-transplants"
          value="2 пересадки"
        />
        <label
          className={classes["checkbox-containers__label"]}
          htmlFor="Two-transplants"
        >
          2 пересадки
        </label>
      </div>
      <div className={classes["checkbox-containers"]}>
        <input
          className={classes["checkbox-containers__checkbox"]}
          type="checkbox"
          id="Three-transplants"
          value="3 пересадким"
        />
        <label
          className={classes["checkbox-containers__label"]}
          htmlFor="Three-transplants"
        >
          3 пересадки
        </label>
      </div>
    </div>
  );
};

export { FilterMenu };
