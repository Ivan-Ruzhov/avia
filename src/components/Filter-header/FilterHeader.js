import React from "react";
import classes from './FilterHeader.module.scss'

const FilterHeader = () => {
  return (
    <div>
      <button>Самый дешевый</button>
      <button>Самый быстрый</button>
      <button>Оптималый</button>
    </div>
  )
}

export { FilterHeader }