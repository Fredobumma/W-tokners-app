import React from "react";
import pngImage_2x from "../images/wallet-hero-img.png";
import pngImage_1x from "../images/wallet-hero-img-1.png";
import webpImage_2x from "../images/wallet-hero-img.webp";
import webpImage_1x from "../images/wallet-hero-img-1.webp";

const Hero = ({ theme }) => {
  return (
    <section className="py-10 relative laptop:py-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full z-[-20] tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>{" "}
      <div>
        <h3 className="font-bold leading-10 max-w-400 text-32 text-left">
          Tknrs Tokenomics and Token Distribution
        </h3>
        <div className="mb-5 mt-3.5 mx-auto w-fit tab:mb-10 tab:mt-7">
          <p className="font-bold leading-5 bigTab:text-xl desktop:text-2xl desktop:leading-54">
            Tknrs Token Distribution Schedule Total Supply:
          </p>
          <div className="mx-auto w-fit">
            <h1 className="font-bold text-minmax48 text-yellow w-full laptop:text-8xl">
              10,000,000,000
            </h1>
            <p className="font-bold leading-4 text-right text-sm bigTab:text-base bigTab:leading-5 desktop:text-2xl desktop:leading-54">
              Tknrs Tokens
            </p>
          </div>
        </div>
        <div className="grid justify-items-center max-w-400 mx-auto tab:max-w-700 laptop:gap-10 laptop:grid-cols-3 laptop:max-w-full desktop:gap-60 desktop:mt-10">
          <div className="justify-self-end laptop:justify-self-start">
            <p className="font-bold text-sm desktop:text-xl desktop:leading-54">
              Premined Tokens
            </p>
            <h2 className="font-bold leading-10 text-32 text-blue-600 tab:text-40 desktop:text-5xl desktop:leading-54">
              3,000,000,000
            </h2>
            <p className="font-bold text-right text-xs desktop:text-xl desktop:leading-54">
              Tknrs Tokens
            </p>
          </div>
          <div className="justify-self-start mb-55 mt-5 tab:mb-88 tab:mt-10 laptop:justify-self-end laptop:m-0 laptop:order-1 laptop:self-end desktop:-mb-30">
            <p className="font-bold text-sm desktop:text-xl desktop:leading-54">
              Daily Token Distribution
            </p>
            <h2 className="font-bold leading-10 text-32 text-red tab:text-40 desktop:text-5xl desktop:leading-54">
              7,000,000,000
            </h2>
            <p className="font-bold text-right text-xs desktop:text-xl desktop:leading-54">
              Tknrs Tokens
            </p>
          </div>
          <div className="laptop:mt-5 desktop:mt-10">
            <picture>
              <source
                srcSet={webpImage_2x}
                media="(min-width: 1024px)"
                type="image/webp"
              />
              <source srcSet={webpImage_1x} type="image/webp" />
              <source
                srcSet={pngImage_2x}
                media="(min-width: 1024px)"
                type="image/png"
              />
              <source srcSet={pngImage_1x} type="image/png" />
              <img
                className="object-stretch scale-[1.11] w-full tab:scale-125 bigTab:scale-150 desktop:scale-[2]"
                src={pngImage_2x}
                alt="Background"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
