import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { SVG } from "../svg";

const Services = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="py-130px relative bigTab:py-150px laptop:-mb-72 laptop:pb-72 laptop:pt-120px desktop:-mb-[488px] desktop:-mt-5 desktop:pt-[220px] desktop:pb-[480px] widerScreen:-mt-30px">
      <span className="absolute h-full inset-0 -ml-5 w-screen -z-20 bigTab:-ml-8 laptop:hidden">
        <SVG id="presale-bg-2" height="100%" width="100%" aspectRatio="none" />
      </span>
      <span className="hidden inset-0 w-screen -z-20 laptop:absolute laptop:block laptop:-ml-16 laptop:h-[85%] widerScreen:max-w-1600">
        <SVG
          id={theme ? "presale-bg" : "darkPresale-bg"}
          height="100%"
          width="100%"
          aspectRatio="none"
        />
      </span>
      <div>
        <div className="bg-dark max-w-640 mb-5 ml-auto p-8 rounded-all text-center text-white bigTab:px-70px bigTab:py-12 laptop:max-w-800 laptop:mb-10 desktop:max-w-1024 desktop:px-48 desktop:py-24 dark:bg-white dark:text-dark">
          <h3 className="font-bold leading-6 mb-5 text-lg desktop:leading-10 desktop:mb-10 desktop:text-32">
            Proposal regarding Total Supply, ICO and Pricing Total Supply (after
            periodical increase of supply):
          </h3>
          <div className="mx-auto w-fit">
            <h2 className="font-bold text-minmax9vw text-green-600 w-full laptop:text-8xl">
              10,000,000,000
            </h2>
            <p className="leading-54 -mt-2.5 text-right text-sm desktop:leading-54 desktop:text-xl">
              Tokens
            </p>
          </div>
        </div>
        <div className="bg-dark max-w-640 p-8 rounded-all text-center text-white bigTab:px-70px bigTab:py-12 laptop:max-w-800 desktop:max-w-1024 desktop:px-48 desktop:py-24 dark:bg-white dark:text-dark">
          <h3 className="font-bold leading-6 mb-[18px] text-lg desktop:leading-10 desktop:mb-30px desktop:text-32">
            Supply at Genesis:
          </h3>
          <div className="mx-auto w-fit">
            <h2 className="font-bold text-minmax9vw text-yellow w-full laptop:text-8xl">
              3,000,000,000
            </h2>
            <p className="leading-54 -mt-2.5 text-right text-sm desktop:leading-54 desktop:mb-5 desktop:text-xl">
              Tokens
            </p>
          </div>
          <p className="opacity-60 text-xs desktop:text-base">
            from the Genesis supply, 2,500,000,000 will be reserved for the ICO
            while 500,000,000 will be allocated for team members, founders and
            to onboard celebrities and influencers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
