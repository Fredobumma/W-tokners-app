import React from "react";
import pngImage_2x from "../images/services-bg.png";
import pngImage_1x from "../images/services-bg-1.png";
import webpImage_2x from "../images/services-bg.webp";
import webpImage_1x from "../images/services-bg-1.webp";

const Services = ({ theme }) => {
  return (
    <section>
      <div className="grid items-center laptop:grid-cols-2 desktop:h-auto">
        <picture>
          <source
            srcSet={webpImage_2x}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source srcSet={webpImage_1x} type="image/webp" />
          <source
            srcSet={pngImage_2x}
            media="(min-width: 768px)"
            type="image/png"
          />
          <source srcSet={pngImage_1x} type="image/png" />
          <img
            className="max-h-400 object-stretch scale-x-115 w-full tab:scale-x-110 laptop:min-h-[420px] laptop:-ml-12 laptop:scale-110 desktop:min-h-auto desktop:-ml-60px desktop:scale-x-110 widerScreen:-ml-16"
            src={pngImage_2x}
            alt="Background"
          />
        </picture>
        <div
          className={`h-auto max-h-full overflow-y-auto -mx-5 px-5 py-70px rounded-tr-[150px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all tab:rounded-tr-[40%] bigTab:-mx-8 bigTab:px-8 bigTab:rounded-tr-[50%] laptop:max-h-[420px] laptop:min-h-[420px] laptop:-mr-16 laptop:pl-120px laptop:rounded-tl-[50%] laptop:rounded-tr-none laptop:scale-y-110 desktop:min-h-auto desktop:pl-170px widerScreen:self-end widerScreen:pb-24 ${
            theme ? "bg-dark text-white" : "bg-light text-dark"
          }`}
        >
          <h2 className="font-bold leading-10 mb-30px text-32 tab:text-40 desktop:text-5xl desktop:leading-54">
            What makes us different?
          </h2>
          <p className="font-bold mb-5 opacity-60 text-sm bigTab:text-base bigTab:leading-5">
            We would only launch tokens with the express permission of the
            creators.
          </p>
          <p className="opacity-60 text-sm bigTab:text-base">
            <span className="inline-block mb-7">
              There are several thousand celebrities and creators on twitter,
              tiktok, Instagram and YouTube with followings in the millions who
              we would be actively engaging before we go viral.
            </span>
            <span>
              We would get them on our platform and they would see the
              opportunity to create a fan driven digital economy where their
              digital content can be traded as NFTs and their most loyal fans
              can have the monetary value of their creator's currency increase
              significantly as they promote their digital currency across their
              channels while our native token holders benefit from the Weentar
              popularity.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
