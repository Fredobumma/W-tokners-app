import { SVG } from "../svg";

const PurchaseGuide = () => {
  const cards = [
    `First Connect your Metamask or TrustWallet to the "Connect Wallet" on the Homepage.`,
    "Then send minimum of 0.1 BNB or maximum of 10 BNB to the Presale wallet.",
    "Then after you will received your $WNTR to your address within 24hours.",
  ];

  return (
    <section className="pb-5 pt-2.5 tab:py-20 laptop:py-0">
      <h2 className="font-bold text-32 text-center leading-10 mb-5 tab:text-40 bigTab:mb-50px desktop:text-5xl desktop:leading-54">
        How to buy
      </h2>
      <div className="grid gap-y-2.5 justify-items-center mx-auto bigTab:gap-y-5 bigTab:max-w-512 bigTab:justify-items-stretch laptop:gap-x-5 laptop:grid-cols-3 laptop:max-w-none">
        {cards.map((text, index) => (
          <div
            key={index}
            className={`bg-lightGuideCard h-max max-w-400 mx-0 px-purchase py-50px rounded-all bigTab:max-w-512 bigTab:pb-100px bigTab:pt-30px laptop:font-bold dark:bg-guideCard ${
              index % 2 === 1 && "relative laptop:mt-60px"
            }`}
          >
            {index % 2 === 1 && (
              <span className="absolute h-60 inset-x-0 mx-auto rotate-90 text-white top-[-16%] w-60 z-10 bigTab:top-[-20%] bigTab:h-86 bigTab:w-86 laptop:h-60 laptop:left-[-106%] laptop:rotate-0 laptop:top-[23%] laptop:w-60 desktop:h-86 desktop:left-[-105%] desktop:w-86 dark:text-dark">
                <SVG id="purchase-icon-1" width="100%" height="100%" />
              </span>
            )}
            <p className="leading-6 mb-5 opacity-50 text-xs bigTab:mb-45px dark:opacity-30">
              0{index + 1}
            </p>
            <p className="font-bold leading-6 text-lg bigTab:max-w-270 bigTab:mx-auto">
              {text}
            </p>
            {index % 2 === 1 && (
              <span className="absolute bottom-[-16%] h-60 inset-x-0 mx-auto rotate-90 text-white w-60 z-10 bigTab:bottom-[-20%] bigTab:h-86 bigTab:w-86 laptop:h-60 laptop:left-[94%] laptop:rotate-0 laptop:top-[23%] laptop:w-60 desktop:h-86 desktop:left-[92%] desktop:w-86 dark:text-dark">
                <SVG id="purchase-icon-2" width="100%" height="100%" />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurchaseGuide;
