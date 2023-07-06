import { lazy } from "react";

const SVG = lazy(async () => ({ default: (await import("../svg")).SVG }));

const Objectives = () => {
  const quaters = [
    {
      color: "green",
      list: ["Team set-up", "Launch of informational website"],
    },
    {
      color: "blue",
      list: [
        "Presale and exchange listings",
        "Blockchain development and launch",
        "Launch of our MVP",
        "Influencer agency partnerships",
        "Marketing and promotion",
      ],
    },
    {
      color: "yellow",
      list: [
        "Celebrity, Creator and Influencer partnerships",
        "Expansion of creator communities on our platform",
        "More Marketing and promotion",
      ],
    },
    {
      color: "red",
      list: [
        "Mainstream partnerships",
        "500 active creator communities",
        "2Million active community members",
        "More marketing and promotion",
      ],
    },
  ];

  return (
    <aside className="py-70px laptop:bg-dark laptop:max-w-1600 laptop:-ml-16 laptop:py-0 laptop:w-screen dark:laptop:bg-light">
      <ul className="grid gap-10 tab:justify-center bigTab:gap-20 laptop:bg-light laptop:gap-12 laptop:grid-cols-4 laptop:h-full laptop:px-16 laptop:py-[200px] laptop:rounded-tr-[25%] laptop:w-full dark:laptop:bg-dark">
        {quaters.map(({ color, list }, index) => (
          <li key={index}>
            <span className="flex gap-x-2.5 mb-30px bigTab:mb-50px">
              <span className="flex h-82 items-center justify-center relative w-82">
                <span className="font-bold text-26 text-dark z-10">
                  Q{++index}
                </span>
                <span className="absolute top-[-11%]">
                  <SVG id={`goals-${color}`} />
                </span>
              </span>
              <span className="-mb-[11px] self-end">
                <span
                  className={`block h-3 mb-px rounded-xl w-3 bg-${color} bg-${color}-600 `}
                ></span>
                <span className="font-bold leading-9 text-lg">2023</span>
              </span>
            </span>
            <ol className="leading-34 list-inside text-lg">
              {list.map((el, index) => (
                <li key={index} className="flex gap-x-2.5 laptop:gap-x-5">
                  <span
                    className={`font-bold font-target leading-34 text-xs text-${color} text-${color}-600`}
                  >
                    0{++index}
                  </span>
                  {el}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Objectives;
