import React from "react";
import "./TopStrip.css";
import { MdOutlineDashboard } from "react-icons/md";
export const TopStrip = () => {
  return (
    <div className="w-full flex justify-center top-strip-wrapper">
      <div className="top-strip-container flex  align-center flex-wrap">
        <div className="flex text-red lorem-ipsum">
          <MdOutlineDashboard />
          <p className="text-sm ">Lorem ipsum dolor</p>
        </div>
        <div className="flex text-red lorem-ipsum">
          <MdOutlineDashboard />
          <p className="text-sm ">Lorem ipsum dolor</p>
        </div>
        <div className="flex text-red lorem-ipsum">
          <MdOutlineDashboard />
          <p className="text-sm ">Lorem ipsum dolor</p>
        </div>
      </div>
    </div>
  );
};
