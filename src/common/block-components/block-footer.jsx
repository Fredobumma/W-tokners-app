import React from "react";
import Switcher from "../switcher";
import { SVG } from "../svg";

const Footer = ({ theme, checked, toggleMode }) => {
  return (
    <footer className="py-10 bigTab:py-20 laptop:py-36">
      <ul className="font-bold gap-x-20 hidden mb-120 laptop:flex laptop:justify-center">
        <li className="active:rotate-3 focus:rotate-3 hover:rotate-3">
          <a href="/team" className="outline-0 underline underline-offset-2">
            OUR TEAM
          </a>
        </li>
        <li>/</li>
        <li className="active:rotate-3 focus:rotate-3 hover:rotate-3">
          <a href="/tokens" className="outline-0 underline underline-offset-2">
            TOKENS
          </a>
        </li>
        <li>/</li>
        <li className="active:rotate-3 focus:rotate-3 hover:rotate-3">
          <a
            href="/join-whitelist"
            className="outline-0 underline underline-offset-2"
          >
            JOIN WHITELIST
          </a>
        </li>
        <li>/</li>
        <li>
          <Switcher checked={checked} onChange={toggleMode} />
        </li>
      </ul>
      <div className="flex flex-col gap-y-8 justify-between items-center bigTab:gap-y-12 laptop:flex-row">
        <a href="/" className="h-[33px] w-[207px] laptop:mb-4">
          <SVG id="namedLogo" height="100%" width="100%" />
        </a>
        <div className="flex gap-x-2.5 justify-center">
          <a
            href="https://www.twitter.com/fredobumma"
            className="h-logo w-logo laptop:h-50 laptop:w-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG
              id={theme ? "darktwitter" : "twitter"}
              height="100%"
              width="100%"
            />
          </a>
          <a
            href="t.me/Fredquinnbee"
            className="h-logo w-logo laptop:h-50 laptop:w-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG
              id={theme ? "darktelegram" : "telegram"}
              height="100%"
              width="100%"
            />
          </a>
          <a
            href="https://www.instagram.com/fredobumma"
            className="h-logo w-logo laptop:h-50 laptop:w-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG
              id={theme ? "darkinstagram" : "instagram"}
              height="100%"
              width="100%"
            />
          </a>
          <a
            href="https://www.medium.com/@fredobumma"
            className="h-logo w-logo laptop:h-50 laptop:w-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG
              id={theme ? "darkmedium" : "medium"}
              height="100%"
              width="100%"
            />
          </a>
          <a
            href="github.com/fredobumma"
            className="h-logo w-logo laptop:h-50 laptop:w-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG
              id={theme ? "darkgithub" : "github"}
              height="100%"
              width="100%"
            />
          </a>
          <a
            href="https://www.reddit.com/user/FredObumma"
            className="h-logo w-logo laptop:h-50 laptop:w-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG
              id={theme ? "darkreddit" : "reddit"}
              height="100%"
              width="100%"
            />
          </a>
        </div>
        <div className="flex flex-col gap-y-2.5 items-center bigTab:gap-y-4 laptop:items-end">
          <p className="font-bold text-sm">
            &copy; 2023 Tokners. All rights reserved.
          </p>
          <p className="flex gap-x-1 items-center text-xs underline underline-offset-2">
            <SVG id="my-logo" />
            Built by Manfred Obumma
          </p>
          <p className="flex gap-x-1 items-center text-xs underline underline-offset-2">
            <SVG id="oleg-logo" />
            Design by Oleg Kulik
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
