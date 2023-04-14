import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Ticket } from "../Ticket";
import { ticketsServes } from "../tickets-servise";
import { tickets } from "../actions/actions";
import { filterOfStops } from "../Reducer/Checxbox-reducer";
import classes from "./ListTickets.module.scss";
const ListTickets = () => {
  console.log("render");
  let id = 0;
  const ticket = new ticketsServes();
  const dispatch = useDispatch();
  const arrTickets = useSelector((state) => state.ticketReducer.tickets);
  const filter = useSelector((state) => state.checkboxOptions.checkedList);
  const ticketList = filterOfStops(arrTickets, filter);
  console.log(ticketList);
  const counter = useSelector((state) => state.moreTickets.count);
  const elements = ticketList.slice(0, counter);
  useEffect(() => {
    if (!localStorage.getItem("aviaID")) {
      ticket.getId().then();
    }
    dispatch(tickets(ticket.getTickets()));
  }, []);
  return (
    <ul className={classes["list-tickets"]}>
      {elements.map((el) => {
        return <Ticket key={id++} tic={el} />;
      })}
    </ul>
  );
};

export { ListTickets };
