import React from "react";
import { SVG } from "../svg";

const Objectives = ({ theme }) => {
  return (
    <aside
      className={`py-50 laptop:max-w-1600 laptop:-ml-16 laptop:py-0 laptop:relative laptop:w-screen laptop:z-[-20] ${
        theme ? "laptop:bg-dark" : "laptop:bg-light"
      }`}
    >
      <div
        className={`grid gap-10 tab:justify-center bigTab:gap-20 laptop:gap-12 laptop:grid-cols-4 laptop:h-full laptop:px-16 laptop:py-170 laptop:relative laptop:rounded-tr-[25%] laptop:w-full laptop:z-[-20] ${
          theme ? "laptop:bg-light" : "laptop:bg-dark"
        }`}
      >
        <div>
          <span className="flex gap-x-2.5 mb-30 bigTab:mb-50">
            <span className="flex h-82 items-center justify-center relative w-82">
              <span className="font-bold text-26 text-dark">Q1</span>
              <span className="absolute -z-10 top-[-11%]">
                <SVG id="goals-green" />
              </span>
            </span>
            <span className="-mb-[11px] self-end">
              <span className="block bg-green-600 h-3 mb-px rounded-xl w-3"></span>
              <span className="font-bold leading-9 text-lg">2023</span>
            </span>
          </span>
          <ol className="leading-34 list-inside text-lg">
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-green-600 text-xs">
                01
              </span>
              Team set-up
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-green-600 text-xs">
                02
              </span>
              Launch of informational website
            </li>
          </ol>
        </div>
        <div>
          <span className="flex gap-x-2.5 mb-30 bigTab:mb-50">
            <span className="flex h-82 items-center justify-center relative w-82">
              <span className="font-bold text-26 text-dark">Q1</span>
              <span className="absolute -z-10 top-[-11%]">
                <SVG id="goals-blue" />
              </span>
            </span>
            <span className="-mb-[11px] self-end">
              <span className="block bg-blue-600 h-3 mb-px rounded-xl w-3"></span>
              <span className="font-bold leading-9 text-lg">2023</span>
            </span>
          </span>
          <ol className="leading-34 list-inside text-lg">
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-blue-600 text-xs">
                01
              </span>
              Presale and exchange listings
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-blue-600 text-xs">
                02
              </span>
              Blockchain development and launch
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-blue-600 text-xs">
                03
              </span>
              Launch of our MVP
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-blue-600 text-xs">
                04
              </span>
              Influencer agency partnerships
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-blue-600 text-xs">
                05
              </span>
              Marketing and promotion
            </li>
          </ol>
        </div>
        <div>
          <span className="flex gap-x-2.5 mb-30 bigTab:mb-50">
            <span className="flex h-82 items-center justify-center relative w-82">
              <span className="font-bold text-26 text-dark">Q1</span>
              <span className="absolute -z-10 top-[-11%]">
                <SVG id="goals-yellow" />
              </span>
            </span>
            <span className="-mb-[11px] self-end">
              <span className="block bg-yellow h-3 mb-px rounded-xl w-3"></span>
              <span className="font-bold leading-9 text-lg">2023</span>
            </span>
          </span>
          <ol className="leading-34 list-inside text-lg">
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-yellow text-xs">
                01
              </span>
              Celebrity, Creator and Influencer partnerships
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-yellow text-xs">
                02
              </span>
              Expansion of creator communities on our platform
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-yellow text-xs">
                03
              </span>
              More Marketing and promotion
            </li>
          </ol>
        </div>
        <div>
          <span className="flex gap-x-2.5 mb-30 bigTab:mb-50">
            <span className="flex h-82 items-center justify-center relative w-82">
              <span className="font-bold text-26 text-dark">Q1</span>
              <span className="absolute -z-10 top-[-11%]">
                <SVG id="goals-red" />
              </span>
            </span>
            <span className="-mb-[11px] self-end">
              <span className="block bg-red h-3 mb-px rounded-xl w-3"></span>
              <span className="font-bold leading-9 text-lg">2023</span>
            </span>
          </span>
          <ol className="leading-34 list-inside text-lg">
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-red text-xs">
                01
              </span>
              Mainstream partnerships
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-red text-xs">
                02
              </span>
              500 active creator communities
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-red text-xs">
                03
              </span>
              2Million active community members
            </li>
            <li className="flex gap-x-2.5 laptop:gap-x-5">
              <span className="font-bold font-target leading-34 text-red text-xs">
                04
              </span>
              More marketing and promotion
            </li>
          </ol>
        </div>
      </div>
    </aside>
  );
};

export default Objectives;
