import React from "react";
import Button from "../button";
import pngImage_2x from "../images/hero-img.png";
import pngImage_1x from "../images/hero-img-1.png";
import webpImage_2x from "../images/hero-img.webp";
import webpImage_1x from "../images/hero-img-1.webp";

const Hero = ({ theme }) => {
  return (
    <section className="py-10 relative laptop:py-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full z-[-20] tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>
      <div className="grid gap-y-2.5 bigTab:gap-y-5 laptop:gap-x-5 laptop:grid-cols-2">
        <div className="max-w-[600px] my-auto tab:px-30 bigTab:px-50 laptop:px-5">
          <p className="font-bold mb-2.5 text-blue-600 text-sm bigTab:text-base">
            At Tokners we are
          </p>
          <h1 className="font-bold text-32 leading-10 tab:text-40 desktop:text-5xl desktop:leading-54">
            Reimagining social media through the power of the blockchain.
          </h1>
          <p className="opacity-60 mb-30 mt-5 text-sm bigTab:text-base laptop:mb-10 laptop:mt-30">
            We are creating social media 3.0 with influencers, celebrities and
            creators being able to launch their own digital currency by simply
            creating a profile with media content posted as Non fungible Tokens
            that can be owned and traded on the Tknrs network
          </p>
          <Button
            label="Learn More"
            extraStyles="active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 px-30 py-3.5 drop-shadow-button transform-gpu transform transition-all duration-300"
          />
        </div>
        <div className="-mt-20 tab:mt-5 laptop:mt-0">
          <picture>
            <source
              srcSet={webpImage_2x}
              media="(min-width: 640px)"
              type="image/webp"
            />
            <source srcSet={webpImage_1x} type="image/webp" />
            <source
              srcSet={pngImage_2x}
              media="(min-width: 640px)"
              type="image/png"
            />
            <source srcSet={pngImage_1x} type="image/png" />
            <img
              className="relative object-stretch scale-x-[1.11] w-full z-[-10] tab:-ml-100 tab:overflow-y-visible tab:scale-150 laptop:max-h-full laptop:-ml-0 laptop:scale-[1.3]"
              src={pngImage_2x}
              alt="Background"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
