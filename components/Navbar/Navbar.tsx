"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { BsBagDash } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
export const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <>
      <div className="navbar-wrapper align-center flex justify-between">
        <div className=" centerContainer ">
          <button
            onClick={() => setshowMenu(true)}
            className="menu-icon center"
          >
            <MdMenu size={30} />
          </button>
          <div className="logo">
            <Image
              src={"/images/Logo.png"}
              alt="logo"
              width={32}
              height={32}
              className="logo"
              layout="responsive"
            />
          </div>
        </div>
        <h1 className="text-center LOGO">LOGO</h1>
        <div className="icons-wrapper flex align-center">
          <CiSearch />
          <IoHeartOutline fontWeight={300} />
          <BsBagDash fontSize={20} />
          <HiOutlineUser className="hide" fontSize={22} />
          <div className="lang hide flex align-center">
            <p className="font-700">ENG</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="show breadcrumbs align-center">
        <p>HOME</p>
        <div className="divider"></div>
        <p>SHOP</p>
      </div>
      <div
        className={`menu-wrapper justify-center font-700 flex-wrap flex ${
          showMenu && "show-menu"
        }`}
      >
        <button onClick={() => setshowMenu(false)} className="close-icon show">
          <IoMdClose size={30} />
        </button>
        <p>SHOP</p>
        <p>SKILLS</p>
        <p>STORIES</p>
        <p>ABOUT </p>
        <p>CONTACT US</p>
        <div className="flex show align-center">
          <HiOutlineUser fontSize={22} />
          <div className="lang flex align-center">
            <p className="font-700">ENG</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </>
  );
};
