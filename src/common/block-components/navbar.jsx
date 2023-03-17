import React from "react";
import { SVG } from "../svg";
import Button from "./../button";

const Navbar = ({ menu, theme, toggleMenu }) => {
  return (
    <nav className="laptop:-mx-30">
      <div className="relative flex items-center justify-between pt-2.5 laptop:justify-start laptop:static">
        <span className="inline max-h-[33px] max-w-[207px] mr-30 laptop:m-0">
          <SVG
            id={theme ? "darkLogo" : "lightLogo"}
            height="100%"
            width="100%"
          />
        </span>
        <button className="group z-20 laptop:hidden" onClick={toggleMenu}>
          <div className="p-2.5 rounded-full w-fit h-fit transform transition-all bg-trasnparent ring-0 ring-gray-400 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={`h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  menu && "rotate-[42deg]"
                } ${(theme && "bg-dark") || "bg-white"}`}
              ></div>
              <div
                className={`h-[2px] w-7 rounded transform transition-all duration-300 ${
                  menu && "-translate-x-10"
                } ${(theme && "bg-dark") || "bg-white"}`}
              ></div>
              <div
                className={`h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  menu && "-rotate-[42deg]"
                } ${(theme && "bg-dark") || "bg-white"}`}
              ></div>
            </div>
          </div>
        </button>
        <div
          className={`absolute bg-white h-[101vh] inset-0 left-[30vw] pr-5 -mt-2.5 pt-[16vh] text-center transform transition-all duration-300 w-[70vw] z-10 laptop:flex laptop:h-auto laptop:items-center laptop:justify-between laptop:ml-50 laptop:mt-3.5 laptop:p-0 laptop:static laptop:text-justify laptop:w-full desktop:ml-20 ${
            !menu && "left-[200vw]"
          }`}
        >
          <ul className="flex flex-col font-bold gap-10 text-sm laptop:flex-row laptop:gap-30 laptop:inline-flex">
            <li>
              <a href="/" className="group overflow-hidden relative">
                Our team
                <span className="absolute bg-secondary h-0.5 inset-0 top-[110%] transition-all duration-300 ease-out w-0 group-active:w-full group-focus:w-full group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="/" className="group overflow-hidden relative">
                Tokens
                <span className="absolute bg-secondary h-0.5 inset-0 top-[110%] transition-all duration-300 ease-out w-0 group-active:w-full group-focus:w-full group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="/" className="group overflow-hidden relative">
                Connect wallet
                <span className="absolute bg-secondary h-0.5 inset-0 top-[110%] transition-all duration-300 ease-out w-0 group-active:w-full group-focus:w-full group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="/" className="group overflow-hidden relative">
                Lightpaper
                <span className="absolute bg-secondary h-0.5 inset-0 top-[110%] transition-all duration-300 ease-out w-0 group-active:w-full group-focus:w-full group-hover:w-full"></span>
              </a>
            </li>
          </ul>
          <div className="flex flex-col w-fit gap-2.5 mt-70 mx-auto laptop:flex-row laptop:gap-2.5 laptop:m-0 desktop:gap-30">
            <Button
              label="Sign In"
              extraStyles="active:bg-secondary bg-transparent py-3 focus:bg-secondary hover:bg-secondary focus:px-10 hover:px-10 transition-all duration-300 laptop:px-2.5 desktop:px-0"
            />
            <Button
              label="Sign Up"
              extraStyles="active:bg-secondary bg-transparent border-2 border-secondary focus:bg-secondary hover:bg-secondary px-10 py-3 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
