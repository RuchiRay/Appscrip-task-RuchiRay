import React from "react";
import "./Filters.css";
import { filterOptions } from "./contants";
import { Filter } from "../Filter/Filter";
export const Filters = () => {
  return (
    <div className="filters-wrapper">
      <div className="flex align-baseline filter-option border-bottom">
        <input type="checkbox" name="" id="" />
        <p className="font-700 text-xl">CUSTOMIZABLE</p>
      </div>
      {filterOptions.map((item) => {
        return (
          <Filter
            key={item.heading}
            heading={item.heading}
            options={item.options}
          />
        );
      })}
    </div>
  );
};
