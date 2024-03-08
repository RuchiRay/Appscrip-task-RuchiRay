import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import "./Filter.css";
interface FilterProps {
  heading: string;
  options: string[];
}

export const Filter = ({ heading, options }: FilterProps) => {
  const [showOptions, setshowOptions] = useState(false);
  return (
    <div className="w-full options-list flex flex-col filter-option border-bottom">
      <div
        onClick={() => setshowOptions(!showOptions)}
        className="flex align-center justify-between pointer"
      >
        <p className="font-700 text-xl">{heading}</p>
        {showOptions ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
      </div>
      <div className="flex flex-col options-list">
        <p className="">ALL</p>
        {showOptions && <p className="unselect-text">Unselect all</p>}
        {showOptions &&
          options.map((item) => {
            return (
              <div key={item} className="option-item flex align-baseline">
                <input type="checkbox" name="" id="" />
                <p>{item}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
