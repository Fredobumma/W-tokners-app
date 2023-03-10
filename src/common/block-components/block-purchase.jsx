import React from "react";
import { SVG } from "../svg";

const PurchaseGuide = ({ theme }) => {
  return (
    <section className="py-10 laptop:py-20">
      <h2 className="font-bold text-32 text-center leading-10 mb-5 tab:text-40 bigTab:mb-50 desktop:text-5xl desktop:leading-54">
        How to buy
      </h2>
      <div className="grid gap-y-2.5 justify-items-center mx-auto bigTab:gap-y-5 bigTab:max-w-512 bigTab:justify-items-stretch laptop:gap-x-5 laptop:grid-cols-3 laptop:max-w-none">
        <div
          className={`${
            theme ? "bg-lightGuideCard" : "bg-guideCard"
          } font-bold h-max max-w-400 mx-0 px-purchase py-50 relative rounded-all bigTab:max-w-512 bigTab:pb-100 bigTab:pt-30`}
        >
          <p
            className={`${
              theme ? "opacity-50" : "opacity-30"
            } leading-6 mb-5 text-xs bigTab:mb-45`}
          >
            01
          </p>
          <p className="leading-6 text-lg bigTab:max-w-270 bigTab:mx-auto">
            First Connect your Metamask or TrustWallet to the "Connect Wallet"
            on the Homepage.
          </p>
        </div>
        <div
          className={`${
            theme ? "bg-lightGuideCard" : "bg-guideCard"
          } font-bold h-max max-w-400 px-purchase py-50 relative rounded-all bigTab:max-w-512 bigTab:pb-100 bigTab:pt-30 laptop:mt-60`}
        >
          <span className="absolute top-[-16%] h-60 inset-x-0 mx-auto rotate-90 w-60 z-10 bigTab:top-[-20%] bigTab:h-86 bigTab:w-86 laptop:h-60 laptop:left-[-106%] laptop:rotate-0 laptop:top-[23%] laptop:w-60 desktop:h-86 desktop:left-[-105%] desktop:w-86">
            <SVG
              id={theme ? "purchase-icon-1" : "dark-purchase-icon-1"}
              width="100%"
              height="100%"
            />
          </span>
          <p
            className={`opacity-${
              theme ? "50" : "30"
            } leading-6 mb-5 text-xs bigTab:mb-45`}
          >
            02
          </p>
          <p className="leading-6 text-lg bigTab:max-w-270 bigTab:mx-auto">
            Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale
            wallet.
          </p>
          <span className="absolute bottom-[-16%] h-60 inset-x-0 mx-auto rotate-90 w-60 z-10 bigTab:bottom-[-20%] bigTab:h-86 bigTab:w-86 laptop:h-60 laptop:left-[94%] laptop:rotate-0 laptop:top-[23%] laptop:w-60 desktop:h-86 desktop:left-[92%] desktop:w-86">
            <SVG
              id={theme ? "purchase-icon-2" : "dark-purchase-icon-2"}
              width="100%"
              height="100%"
            />
          </span>
        </div>
        <div
          className={`${
            theme ? "bg-lightGuideCard" : "bg-guideCard"
          } font-bold h-max max-w-400 px-purchase py-50 rounded-all bigTab:max-w-512 bigTab:pb-100 bigTab:pt-30`}
        >
          <p
            className={`opacity-${
              theme ? "50" : "30"
            } leading-6 mb-5 text-xs bigTab:mb-45`}
          >
            03
          </p>
          <p className="leading-6 text-lg bigTab:max-w-270 bigTab:mx-auto">
            Then after you will received your $WNTR to your address within
            24hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseGuide;
