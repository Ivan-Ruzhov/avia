import React from "react";
import classes from "./ListTickets.module.scss";
import { Ticket } from "../Ticket";

const ListTickets = () => {
  return (
    <ul className={classes["list-tickets"]}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
};

export { ListTickets };
