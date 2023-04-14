import React from "react";
import { add, format } from "date-fns";

import classes from "./Ticket.module.scss";

const Ticket = ({ tic }) => {
  const oneTime = format(add(new Date(tic.segments[0].date), {}), "KK-mm")
    .split("-")
    .join(":");
  const twoTime = format(add(new Date(tic.segments[1].date), {}), "KK-mm")
    .split("-")
    .join(":");
  const fixNumber = (arr) => {
    if (arr[1] >= 60) {
      const newNum = (Number(arr[0]) + 1).toString();
      const newNumTwo = (Number(arr[1]) - 60).toString();
      return arr.splice(0, 2, newNum, newNumTwo);
    }
    return arr;
  };
  const fixDate = (arr, arrTwo) => {
    const newArrayTwo = fixNumber(arrTwo);
    const newArray = arr.split(":");
    let newHours = Number(newArray[0]) + Number(newArrayTwo[0]);
    if (newHours >= 24) {
      newHours -= 24;
    }
    let newMinutes = Number(newArray[1]) + Number(newArrayTwo[1]);
    if (newMinutes >= 60) {
      newMinutes -= 60;
      newHours += 1;
    }
    if (newMinutes < 10) {
      newMinutes = "0" + newMinutes.toString();
    }
    if (newHours < 10) {
      newHours = "0" + newHours;
    }
    return [newHours, newMinutes].join(":");
  };
  const first = (tic.segments[0].duration / 60).toFixed(2).split(".");
  const second = (tic.segments[1].duration / 60).toFixed(2).split(".");
  return (
    <div className={classes.ticket}>
      <header className={classes.ticket__header}>
        <span className={classes.ticket__price}>{tic.price} Р</span>
        <img
          className={classes.ticket__logo}
          src={`https://pics.avs.io/99/36/${tic.logo}.png`}
          alt="Логотип Авиакомпании"
        />
      </header>
      <ul className={classes.list}>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>
            {tic.segments[0].origin} - {tic.segments[0].destination}
          </span>
          <span className={classes["list__span-description"]}>
            {oneTime} - {fixDate(oneTime, first)}
          </span>
        </li>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>В пути</span>
          <span className={classes["list__span-description"]}>
            {fixNumber(first)[0]}ч {fixNumber(first)[1]}м
          </span>
        </li>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>
            {tic.segments[0].stops.length === 0 ? "Нет пересадок" : null}
            {tic.segments[0].stops.length === 1 ? "1 пересадка" : null}
            {tic.segments[0].stops.length === 2 ? "2 пересадки" : null}
            {tic.segments[0].stops.length === 3 ? "3 пересадки" : null}
          </span>
          <span className={classes["list__span-description"]}>
            {tic.segments[0].stops.length === 0 ? null : null}
            {tic.segments[0].stops.length === 1
              ? `${tic.segments[0].stops[0]}`
              : null}
            {tic.segments[0].stops.length === 2
              ? `${tic.segments[0].stops[0]}, ${tic.segments[0].stops[1]}`
              : null}
            {tic.segments[0].stops.length === 3
              ? `${tic.segments[0].stops[0]}, ${tic.segments[0].stops[1]}, ${tic.segments[0].stops[2]}`
              : null}
          </span>
        </li>
      </ul>
      <ul className={classes.list}>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>
            {tic.segments[1].origin} - {tic.segments[1].destination}
          </span>
          <span className={classes["list__span-description"]}>
            {twoTime} - {fixDate(twoTime, second)}
          </span>
        </li>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>В пути</span>
          <span className={classes["list__span-description"]}>
            {fixNumber(second)[0]}ч {fixNumber(second)[1]}м
          </span>
        </li>
        <li className={classes.list__element}>
          <span className={classes["list__span-header"]}>
            {tic.segments[1].stops.length === 0 ? "Нет пересадок" : null}
            {tic.segments[1].stops.length === 1 ? "1 пересадка" : null}
            {tic.segments[1].stops.length === 2 ? "2 пересадки" : null}
            {tic.segments[1].stops.length === 3 ? "3 пересадки" : null}
          </span>
          <span className={classes["list__span-description"]}>
            {tic.segments[1].stops.length === 0 ? null : null}
            {tic.segments[1].stops.length === 1
              ? `${tic.segments[1].stops[0]}`
              : null}
            {tic.segments[1].stops.length === 2
              ? `${tic.segments[1].stops[0]}, ${tic.segments[1].stops[1]}`
              : null}
            {tic.segments[1].stops.length === 3
              ? `${tic.segments[1].stops[0]}, ${tic.segments[1].stops[1]}, ${tic.segments[1].stops[2]}`
              : null}
          </span>
        </li>
      </ul>
    </div>
  );
};

export { Ticket };
