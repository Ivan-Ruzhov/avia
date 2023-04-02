import React from "react";
import classes from './FilterMenu.module.scss'

const FilterMenu = () => {
  return (
    <div>
      <h2>Количетсво пересадок</h2>
      <input type="checkbox" id="All" value="Все"/>
      <label htmlFor="All">Все</label>
      <input type="checkbox" id="No-transfer" value="Без пересадок"/>
      <label htmlFor="No-transfer">Без пересадок</label>
      <input type="checkbox" id="One-transfer" value="1 пересадка"/>
      <label htmlFor="One-transfer">1 пересадка</label>
      <input type="checkbox" id="Two-transplants" value="2 пересадки"/>
      <label htmlFor="Two-transplants">2 пересадки</label>
      <input type="checkbox" id="Three-transplants" value="3 пересадким"/>
      <label htmlFor="Three-transplants">3 пересадки</label>
    </div>
  )
}

export { FilterMenu }