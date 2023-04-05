import React from "react";
import classes from "./Ticket.module.scss";

const Ticket = () => {
  console.log(classes);
  return (
    <div className={classes.ticket}>
      <header className={classes.ticket__header}>
        <span className={classes.ticket__price}>13400 Р</span>
        <img className={classes.ticket__logo} alt="Логотип Авиакомпании" />
      </header>
      <ul className={classes.list}>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>MOW - HKT</span>
          <span className={classes["list__span-description"]}>
            10:45 - 08:00
          </span>
        </li>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>В пути</span>
          <span className={classes["list__span-description"]}>21ч 15м</span>
        </li>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>2 пересадки</span>
          <span className={classes["list__span-description"]}>HKG, JNB</span>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>MOW - HKT</span>
          <span className={classes["list__span-description"]}>
            11:20 - 00:50
          </span>
        </li>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>В пути</span>
          <span className={classes["list__span-description"]}>13ч 30м</span>
        </li>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>1 пересадкА</span>
          <span className={classes["list__span-description"]}>HKG</span>
        </li>
      </ul>
    </div>
  );
};

export { Ticket };
