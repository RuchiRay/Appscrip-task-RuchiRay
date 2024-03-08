"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineChevronLeft, MdKeyboardArrowDown } from "react-icons/md";
import "./ShoppingPage.css";
import { sortingOptions } from "./constants";
import { IoMdCheckmark } from "react-icons/io";
import { Filters } from "../Filters/Filters";
import { ReactNode } from "react";

type ShoppingPageProps = {
  children: ReactNode;
};

export const ShoppingPage = ({ children }: ShoppingPageProps) => {
  const [productCount, setProductCount] = useState(0);
  const [showFilters, setshowFilters] = useState(true);
  const [selectedSortingOption, setselectedSortingOption] = useState(
    sortingOptions[0]
  );
  const [showSortingOptions, setshowSortingOptions] = useState(false);

  useEffect(() => {
    const getProductCount = async () => {
      const req = await fetch("https://fakestoreapi.com/products?sort=desc");
      const data = await req.json();
      setProductCount(data.length);
    };
    getProductCount();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-header flex justify-between align-center border-bottom border-top">
        <div className="flex left justify-between align-center">
          <p className="font-700 product-count">{productCount} ITEMS</p>
          <div
            onClick={() => setshowFilters(!showFilters)}
            className="flex align-center pointer gap pointer"
          >
            <MdOutlineChevronLeft size={16} />
            <button className="pointer">
              {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
            </button>
          </div>
        </div>
        <div className="flex gap align-center pointer relative selected-option">
          <p
            onClick={() => setshowSortingOptions(!showSortingOptions)}
            className="font-700 product-count"
          >
            {selectedSortingOption}
          </p>
          <MdKeyboardArrowDown size={16} />
          {showSortingOptions && (
            <div className="sort-wrapper absolute flex flex-col">
              {sortingOptions.map((option) => {
                return (
                  <button
                    className={`flex align-center option-button ${
                      option === selectedSortingOption && "font-700"
                    }`}
                    key={option}
                    onClick={() => setselectedSortingOption(option)}
                  >
                    {option === selectedSortingOption && (
                      <IoMdCheckmark fontWeight={700} />
                    )}{" "}
                    {option}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="flex filter-prdducts-wrapper">
        {showFilters && <Filters />}
        {children}
      </div>
    </div>
  );
};
