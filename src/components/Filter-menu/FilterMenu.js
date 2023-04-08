import React from "react";
import classes from "./FilterMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";

const FilterMenu = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.checkbox.checkbox);
  const all = () => {
    dispatch({ type: "ALL" });
  };
  const noTransfer = () => {
    dispatch({ type: "NO-TRANSFER" });
  };
  const oneTransfer = () => {
    dispatch({ type: "ONE-TRANSFER" });
  };
  const twoTransfer = () => {
    dispatch({ type: "TWO-TRANSFER" });
  };
  const threeTransfer = () => {
    dispatch({ type: "THREE-TRANSFER" });
  };
  return (
    <div className={classes["side-menu"]}>
      <h2 className={classes["side-menu__header"]}>Количетсво пересадок</h2>
      <div className={classes["checkbox-containers"]}>
        <input
          className={classes["checkbox-containers__checkbox"]}
          type="checkbox"
          id="All"
          value="Все"
          checked={filter.All}
          onChange={all}
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
          checked={filter.noTransfer}
          onChange={noTransfer}
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
          checked={filter.oneTransfer}
          onChange={oneTransfer}
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
          checked={filter.twoTransfer}
          onChange={twoTransfer}
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
          checked={filter.threeTransfer}
          onChange={threeTransfer}
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
