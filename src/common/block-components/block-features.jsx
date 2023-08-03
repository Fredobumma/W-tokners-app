import { lazy } from "react";
import { Link } from "react-router-dom";

const SVG = lazy(() => import("../assets/svgs/guestPageSvg"));

const Features = () => {
  // === Cards Details
  const cards = [
    {
      name: "Creators",
      id: "creators-crown",
      color: "green",
      textClasses: "laptop:mb-16",
      text: "Creators can gain independence through a decentralised digital currency system that is dependent on growing and engaging with the community and also their star power. They own 10-15% of the total value of the tokens minted.",
    },
    {
      name: "Holders",
      id: "holders-star",
      color: "blue",
      containerClasses: "laptop:mt-24",
      text: "Holding social tokens allows the individual to gain access to benefits including unreleased content, private communities, direct access to celebrity, early-access to tickets and more as well as the ability to trade with other communities in order to gain access to more creator content with early token buyers being the biggest winners as the value of the token increases with more buyers.",
    },
  ];

  return (
    <section className="pb-60px pt-10 tab:pb-20 tab:pt-150px bigTab:pb-100px bigTab:pt-170px laptop:pb-150px laptop:pt-20">
      <div className="grid gap-y-2.5 bigTab:gap-y-5 laptop:gap-x-5 laptop:grid-cols-2">
        {cards.map(
          ({ id, name, color, containerClasses, textClasses, text }, index) => (
            <div
              key={index}
              className={`bg-lightGuideCard h-max max-w-full mx-auto px-purchase pt-30px pb-10 rounded-all tab:px-10 bigTab:max-w-[90%] bigTab:px-50px laptop:max-w-full laptop:px-30px laptop:py-60px desktop:px-50px widerScreen:px-70px dark:bg-guideCard ${containerClasses}`}
            >
              <span className="inline-block -ml-6 -mb-9 text-lightGuideCard laptop:-mb-5 dark:text-guideCard">
                <SVG id={id} />
              </span>
              <h3 className="font-bold text-28 leading-54 tab:text-32 desktop:text-4xl">
                For{" "}
                <span
                  className={`text-${color}-600 underline underline-offset-3`}
                >
                  {name}
                </span>
              </h3>
              <p
                className={`opacity-50 mt-2.5 mb-5 laptop:mt-5 ${textClasses}`}
              >
                {text}
              </p>
              <Link
                to="/login"
                className={`inline-flex font-bold gap-1.5 group items-center outline-0 text-sm transition underline underline-offset-2 text-${color}-600`}
              >
                Learn More
                <span className="group-active:ml-1 group-focus:ml-1 group-hover:ml-1 transform transition-all duration-300">
                  <SVG id={`${color}-arrow`} />
                </span>
              </Link>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Features;
