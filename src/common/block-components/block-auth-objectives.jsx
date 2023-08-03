import SVG from "../assets/svgs/allSvg";

const Objectives = () => {
  // === Cards Details
  const cards = [
    {
      color: "green",
      year: 1,
      range: "Day 1 - Day 90",
      rate: 10,
      tokens: 900,
    },
    {
      color: "yellow",
      year: 1,
      range: "Day 90 - Day 365",
      rate: 5,
      tokens: 1375,
    },
    {
      color: "blue",
      year: 2,
      rate: 4,
      tokens: 1460,
    },
    {
      color: "red",
      year: 3,
      rate: 3,
      tokens: 1095,
    },
    {
      color: "green",
      year: 4,
      rate: 2,
      tokens: 730,
    },
    {
      color: "yellow",
      year: 5,
    },
    {
      color: "blue",
      year: 6,
    },
    {
      color: "red",
      year: 7,
    },
    {
      color: "green",
      year: 8,
      tokens: 345,
    },
  ];

  return (
    <section className="pb-2.5 pt-50px tab:pb-5 tab:pt-10 bigTab:pb-30px bigTab:pt-60px laptop:pb-0 laptop:pt-100px">
      <div className="flex flex-wrap justify-center gap-2.5 laptop:gap-5">
        {cards.map(({ color, year, range, rate, tokens }, index) => (
          <span
            key={index}
            className="bg-lightGuideCard flex-col inline-flex justify-start max-h-max p-5 pr-8 rounded-all max-w-max bigTab:p-6 bigTab:pr-9 dark:bg-guideCard"
          >
            <span className="flex gap-x-1 items-center -ml-1.5 tab:gap-x-2">
              <span className="h-9 inline-block overflow-hidden relative w-9">
                <span className="absolute top-[11%]">
                  <SVG id={`goals-${color}`} width="100%" height="100%" />
                </span>
              </span>
              <span
                className={`font-bold leading-34 text-xs tab:leading-34 tab:text-sm text-${color} text-${color}-600`}
              >
                Year {year}
              </span>
            </span>
            <span className="flex flex-col bigTab:ml-38px bigTab:mr-2">
              {range && (
                <span className="font-bold text-sm -mb-2 mt-2.5 bigTab:leading-5 bigTab:text-lg bigTab:-mb-3 bigTab:mt-1.5">
                  {range}
                </span>
              )}
              <span className="-mb-2 mt-2 opacity-70 text-15 bigTab:leading-34 bigTab:mt-5 bigTab:text-xl">
                {rate || 1}M Tokens/Day
              </span>
              <span className="leading-34 opacity-70 text-xs bigTab:leading-34 bigTab:text-sm">
                ({tokens || 365}M Tokens)
              </span>
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
