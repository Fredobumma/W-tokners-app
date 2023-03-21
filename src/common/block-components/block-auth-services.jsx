import React from "react";

const Services = ({ theme }) => {
  return (
    <section className="py-10 laptop:py-20">
      <div>
        <div
          className={`max-w-640 mb-5 ml-auto p-8 rounded-all text-center bigTab:px-70 bigTab:py-12 laptop:max-w-800 laptop:mb-10 desktop:max-w-1024 desktop:px-48 desktop:py-24 ${
            theme ? "bg-dark text-white" : "bg-white text-dark"
          }`}
        >
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
        <div
          className={`max-w-640 p-8 rounded-all text-center bigTab:px-70 bigTab:py-12 laptop:max-w-800 desktop:max-w-1024 desktop:px-48 desktop:py-24 ${
            theme ? "bg-dark text-white" : "bg-white text-dark"
          }`}
        >
          <h3 className="font-bold leading-6 mb-[18px] text-lg desktop:leading-10 desktop:mb-30 desktop:text-32">
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
