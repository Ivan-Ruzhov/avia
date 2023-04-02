import React from "react";
import classes from './ListTickets.module.scss'
import { Ticket } from "../Ticket";

const ListTickets = () => {
  return (
    <ul>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  )
}

export { ListTickets }