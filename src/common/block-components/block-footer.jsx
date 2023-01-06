import React from "react";
import { SVG } from "../svg";

const Footer = ({ theme }) => {
  return (
    <footer className="py-10 bigTab:py-20 laptop:py-36">
      <ul className="font-bold gap-x-20 hidden mb-120 laptop:inline-flex">
        <li>
          <a
            href="#login"
            className="active:rotate-3 focus:rotate-3 hover:rotate-3  underline underline-offset-2"
          >
            OUR TEAM
          </a>
        </li>
        <li>/</li>
        <li>
          <a
            href="#login"
            className="active:rotate-3 focus:rotate-3 hover:rotate-3 underline underline-offset-2"
          >
            TOKENS
          </a>
        </li>
        <li>/</li>
        <li>
          <a
            href="#login"
            className="active:rotate-3 focus:rotate-3 hover:rotate-3 underline underline-offset-2"
          >
            CONNECT WALLET
          </a>
        </li>
        <li>/</li>
        <li>
          <a
            href="#login"
            className="active:rotate-3 focus:rotate-3 hover:rotate-3 underline underline-offset-2"
          >
            LIGHTPAPER
          </a>
        </li>
      </ul>
      <div className="flex flex-col gap-y-8 justify-between items-center bigTab:gap-y-12 laptop:flex-row">
        <span className="h-[33px] w-[207px] laptop:mb-4">
          <SVG
            id={theme ? "darkLogo" : "lightLogo"}
            height="100%"
            width="100%"
          />
        </span>
        <div className="flex gap-x-2.5 justify-center">
          <span className="h-logo w-logo laptop:h-50 laptop:w-50">
            <SVG id="twitter" height="100%" width="100%" />
          </span>
          <span className="h-logo w-logo laptop:h-50 laptop:w-50">
            <SVG id="telegram" height="100%" width="100%" />
          </span>
          <span className="h-logo w-logo laptop:h-50 laptop:w-50">
            <SVG id="instagram" height="100%" width="100%" />
          </span>
          <span className="h-logo w-logo laptop:h-50 laptop:w-50">
            <SVG id="medium" height="100%" width="100%" />
          </span>
          <span className="h-logo w-logo laptop:h-50 laptop:w-50">
            <SVG id="github" height="100%" width="100%" />
          </span>
          <span className="h-logo w-logo laptop:h-50 laptop:w-50">
            <SVG id="reddit" height="100%" width="100%" />
          </span>
        </div>
        <div className="flex flex-col gap-y-2.5 items-center bigTab:gap-y-4 laptop:items-end">
          <p className="font-bold text-sm">
            &copy; 2023 Tokners. All rights reserved.
          </p>
          <p className="flex gap-x-1 items-center text-xs underline underline-offset-2">
            <SVG id={theme ? "my-logo-dark" : "my-logo"} />
            Built by Manfred Obumma
          </p>
          <p className="flex gap-x-1 items-center text-xs underline underline-offset-2">
            <SVG id={theme ? "dark-oleg-logo" : "oleg-logo"} />
            Design by Oleg Kulik
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
