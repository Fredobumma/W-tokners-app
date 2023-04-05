import React from "react";
import { SVG } from "../svg";
import pngImage_2x from "../images/showcase-bg.png";
import pngImage_1x from "../images/showcase-bg-1.png";
import webpImage_2x from "../images/showcase-bg.webp";
import webpImage_1x from "../images/showcase-bg-1.webp";
import Button from "../button";

const Showcase = () => {
  return (
    <section>
      <div className="showcase-container grid gap-y-70 bigTab:grid-cols-2 bigTab:gap-x-10">
        <div className="order-last bigTab:order-first">
          <h2 className="flex flex-col font-bold gap-y-2.5 text-32 leading-10 mb-4 tab:text-40 laptop:flex-row laptop:gap-x-6 laptop:items-center laptop:mb-5 desktop:mb-10 desktop:text-5xl desktop:leading-54">
            <SVG id="logo" />
            Tokner is coming
          </h2>
          <p className="opacity-60">
            <span className="inline-block font-bold mb-5">
              Cryptocurrency adoption is at less than 1% of the global world
              population with some countries and entities actively fighting
              against its mass adoption and the smartest developers and nerds
              holding the fort.
            </span>
            Bitcoin was the first, and it has since grown to thousands of tokens
            launched all aiming to fix one problem or the other with some quite
            simply FOMOing the moment. Our goal is to bring mass adoption to the
            cryptocurrency space by dumbing it down. How far down? So down that
            even a celebrity can explain it in simple words to their followers
            and have them download an app, buy into the social currency of their
            favourite person and watch their investment as is with other crypto
            currency project. We are trying to do to this space what investment
            apps did for the "nonexistent retail investors". We are gamefying
            digital currency, bringing in popular faces instead of hard to
            understand projects to make it the norm and inadvertently being the
            "gateway drug" for a lot of people to finally give this space a real
            look.
          </p>
          <p className="my-5 opacity-60">
            <span className="inline-block font-bold mb-5">
              A new digital economy is coming. People would be just as powerful
              as countries and creators would be paid beyond the peanuts that
              conventional social media platforms can offer.
            </span>
            There would be new markets and advertisers with little to offer
            would not find home there. Like Kanye said,
          </p>
          <p className="flex font-bold gap-x-3.5 italic">
            <span className="leading-6 mt-1 not-italic text-2xl text-yellow">
              “
            </span>
            <span className="opacity-60">
              "Personalities would become the new currency, and services would
              be built on top of them".
            </span>
          </p>
          <p className="opacity-60 my-5">
            <span className="block mb-6">
              Well, Kanye didn't exactly say that, but it sounds like something
              we hope he would say.
            </span>
            Currency is digital, it has been that way for a while now, but this
            time there would be no dead presidents on the money, there would
            people like you on the money, and you would own it because it would
            make the most sense in the world.
          </p>
          <Button
            label="Read More"
            extraStyles="active:bg-secondary bg-transparent border-2 border-secondary focus:bg-secondary hover:bg-secondary px-10 py-3 transform-gpu transform transition-all duration-300"
          />
        </div>
        <picture className="justify-self-end bigTab:justify-self-auto">
          <source
            srcSet={webpImage_2x}
            media="(min-width: 1280px)"
            type="image/webp"
          />
          <source srcSet={webpImage_1x} type="image/webp" />
          <source
            srcSet={pngImage_2x}
            media="(min-width: 1280px)"
            type="image/png"
          />
          <source srcSet={pngImage_1x} type="image/png" />
          <img
            className="mx-auto"
            src={pngImage_2x}
            alt="A woman holding her phone"
          />
        </picture>
      </div>
    </section>
  );
};

export default Showcase;
