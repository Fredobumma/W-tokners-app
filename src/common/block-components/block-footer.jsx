import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import Switcher from "../switcher";
import { SVG } from "../svg";

const Footer = () => {
  const { checked, toggleMode } = useContext(ThemeContext);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="py-10 relative bigTab:pt-20 bigTab:pb-50px laptop:pt-52 laptop:pb-70px">
      <div className="absolute bg-nav blur-[100px] h-60 inset-0 w-full -z-10 tab:left-1/3 laptop:bg-nav-xl laptop:right-[60%] dark:bg-darkNav dark:laptop:bg-darkNav-xl"></div>
      <ul className="font-bold gap-x-20 hidden mb-120px laptop:flex laptop:justify-center">
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
        <div className="flex gap-x-2.5 justify-center text-dark dark:text-white">
          <a
            href="https://www.twitter.com/fredobumma"
            className="border-2 border-transparent bg-[#0f132066] h-logo rounded-full w-logo laptop:h-50 laptop:w-50 dark:border-[#ffffff0d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG id="twitter" height="100%" width="100%" />
          </a>
          <a
            href="https://t.me/Fredquinnbee"
            className="border-2 border-transparent bg-[#0f132066] h-logo rounded-full w-logo laptop:h-50 laptop:w-50 dark:border-[#ffffff0d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG id="telegram" height="100%" width="100%" />
          </a>
          <a
            href="https://www.instagram.com/fredobumma"
            className="border-2 border-transparent bg-[#0f132066] h-logo rounded-full w-logo laptop:h-50 laptop:w-50 dark:border-[#ffffff0d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG id="instagram" height="100%" width="100%" />
          </a>
          <a
            href="https://www.medium.com/@fredobumma"
            className="border-2 border-transparent bg-[#0f132066] h-logo rounded-full w-logo laptop:h-50 laptop:w-50 dark:border-[#ffffff0d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG id="medium" height="100%" width="100%" />
          </a>
          <a
            href="https://github.com/Fredobumma"
            className="border-2 border-transparent bg-[#0f132066] h-logo rounded-full w-logo laptop:h-50 laptop:w-50 dark:border-[#ffffff0d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG id="github" height="100%" width="100%" />
          </a>
          <a
            href="https://www.reddit.com/user/FredObumma"
            className="border-2 border-transparent bg-[#0f132066] h-logo rounded-full w-logo laptop:h-50 laptop:w-50 dark:border-[#ffffff0d]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVG id="reddit" height="100%" width="100%" />
          </a>
        </div>
        <div className="flex flex-col gap-y-2.5 items-center bigTab:gap-y-4 laptop:items-end">
          <p className="font-bold text-sm">
            &copy; {year} Tokners. All rights reserved.
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
