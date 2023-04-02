import React from "react";
import classes from './App.module.scss';
import { FilterHeader } from "../Filter-header";
import { FooterButton } from "../Footer-button";
import { FilterMenu } from "../Filter-menu";
import { ListTickets } from "../List-tickets";
import { Ticket } from "../Ticket";

function App() {
  console.log(classes)
  return (
    <div>
      <img src="../../picture/logo.svg" alt="Company Logo"/>
      <FilterHeader />
      <FilterMenu />
      <ListTickets>
        <Ticket/>
      </ListTickets>
      <FooterButton />
    </div>
  );
}

export { App } ;
