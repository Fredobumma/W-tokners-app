import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { SVG } from "../svg";

const Features = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="pb-60px pt-10 tab:pb-20 tab:pt-150px bigTab:pb-100px bigTab:pt-170px laptop:pb-150px laptop:pt-20">
      <div className="grid gap-y-2.5 bigTab:gap-y-5 laptop:gap-x-5 laptop:grid-cols-2">
        <div className="bg-lightGuideCard h-max max-w-full mx-auto px-purchase pt-30px pb-10 rounded-all tab:px-10 bigTab:max-w-[90%] bigTab:px-50px laptop:max-w-full laptop:px-30px laptop:py-60px desktop:px-50px widerScreen:px-70px dark:bg-guideCard">
          <span className="inline-block -ml-6 -mb-9 laptop:-mb-5">
            <SVG id={theme ? "light-creators-crown" : "dark-creators-crown"} />
          </span>
          <h3 className="font-bold text-28 leading-54 tab:text-32 desktop:text-4xl">
            For{" "}
            <span className="text-green-600 underline underline-offset-3">
              Creators
            </span>
          </h3>
          <p className="opacity-50 mt-2.5 mb-5 laptop:mt-5 laptop:mb-16">
            Creators can gain independence through a decentralised digital
            currency system that is dependent on growing and engaging with the
            community and also their star power. They own 10-15% of the total
            value of the tokens minted.
          </p>
          <a
            href="#login"
            className="inline-flex font-bold gap-1.5 group items-center outline-0 text-sm text-creatorsLink transition underline underline-offset-2"
          >
            Learn More
            <span className="group-active:ml-1 group-focus:ml-1 group-hover:ml-1 transform transition-all duration-300">
              <SVG id="green-arrow" />
            </span>
          </a>
        </div>
        <div className="bg-lightGuideCard h-max max-w-full mx-auto px-purchase pt-30px pb-10 rounded-all tab:px-10 bigTab:max-w-[90%] bigTab:px-50px laptop:max-w-full laptop:mt-24 laptop:px-30px laptop:py-60px desktop:px-50px widerScreen:px-70px dark:bg-guideCard">
          <span className="inline-block -ml-6 -mb-9 laptop:-mb-5">
            <SVG id={theme ? "light-folders-star" : "dark-folders-star"} />
          </span>
          <h3 className="font-bold text-28 leading-54 tab:text-32 desktop:text-4xl">
            For{" "}
            <span className="text-blue-600 underline underline-offset-3">
              Holders
            </span>
          </h3>
          <p className="opacity-50 mt-2.5 mb-5 laptop:my-5">
            Holding social tokens allows the individual to gain access to
            benefits including unreleased content, private communities, direct
            access to celebrity, early- access to tickets and more as well as
            the ability to trade with other communities in order to gain access
            to more creator content with early token buyers being the biggest
            winners as the value of the token increases with more buyers.
          </p>
          <a
            href="#login"
            className="inline-flex font-bold gap-1.5 group items-center outline-0 text-sm text-holdersLink transition underline underline-offset-2"
          >
            Learn More
            <span className="group-active:ml-1 group-focus:ml-1 group-hover:ml-1 transform transition-all duration-300">
              <SVG id="blue-arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
