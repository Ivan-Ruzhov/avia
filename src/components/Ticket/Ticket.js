import React from "react";
import classes from './Ticket.module.scss'

const Ticket = () => {
  return (
    <div>
      <header>
        <span>13400 Р</span>
        <img alt="Логотип Авиакомпании"/>
      </header>
      <ul>
        <li>
          <span>MOW - HKT</span>
          <span>10:45 - 08:00</span>
        </li>
        <li>
          <span>В пути</span>
          <span>21ч 15м</span>
        </li>
        <li>
          <span>2 пересадки</span>
          <span>HKG, JNB</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>MOW - HKT</span>
          <span>11:20 - 00:50</span>
        </li>
        <li>
          <span>В пути</span>
          <span>13ч 30м</span>
        </li>
        <li>
          <span>1 пересадкА</span>
          <span>HKG</span>
        </li>
      </ul>
    </div>
  )
}

export { Ticket }