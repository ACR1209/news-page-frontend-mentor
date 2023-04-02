import React, { useState } from "react";
import logo from "../assets/logo.svg";
import NavListItem from "./NavListItem";
import menu from "../assets/icon-menu.svg";
import close from "../assets/icon-menu-close.svg";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <nav className="flex sticky top-0 pt-10 bg-offWhite  z-10 w-100  justify-between py-5 mb-10">
        <img src={logo} />

        <ul className="lg:flex hidden justify-between w-0 lg:w-5/12">
          <NavListItem name="Home" />
          <NavListItem name="New" />
          <NavListItem name="Popular" />
          <NavListItem name="Trending" />
          <NavListItem name="Categories" />
        </ul>

        <div className="lg:hidden ">
          <div
            className={`lg:hidden absolute top-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] before:w-100 before:bg-slate-400 right-0 sidebar ${
              showSidebar ? "visible" : "invisible"
            }`}
          ></div>
          <div
            className={`lg:hidden p-5 absolute top-0 w-72 h-screen bg-offWhite before:w-100 before:bg-slate-400 right-0 sidebar ${
              showSidebar ? "visible" : "invisible"
            }`}
          >
            <div className="flex flex-col w-100">
              <div className="w-100 flex justify-end">
                <img
                  src={close}
                  className={`lg:hidden ${
                    showSidebar ? "visible" : "invisible"
                  } first-letter: w-10`}
                  onClick={toggleSidebar}
                />
              </div>
              <ul className="flex mt-20 flex-col text-md font-medium space-y-5 text-darkBlue">
                <NavListItem name="Home" />
                <NavListItem name="New" />
                <NavListItem name="Popular" />
                <NavListItem name="Trending" />
                <NavListItem name="Categories" />
              </ul>
            </div>
          </div>
        </div>
        <img
          src={menu}
          className={`lg:hidden ${
            showSidebar ? "invisible" : "visible"
          } first-letter: w-20`}
          onClick={toggleSidebar}
        />
      </nav>
    </>
  );
}

export default Navbar;
