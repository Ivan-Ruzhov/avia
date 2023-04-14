import React from "react";

import { FilterHeader } from "../Filter-header";
import { FooterButton } from "../Footer-button";
import { FilterMenu } from "../Filter-menu";
import { ListTickets } from "../List-tickets";
import { Ticket } from "../Ticket";
import Logo from "../../picture/logo.svg";

import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.app}>
      <img className={classes.app__logo} src={Logo} alt="Company Logo" />
      <div className={classes.container}>
        <FilterMenu />
        <div className={classes.content}>
          <FilterHeader />
          <ListTickets>
            <Ticket />
          </ListTickets>
          <FooterButton />
        </div>
      </div>
    </div>
  );
}

export { App };
