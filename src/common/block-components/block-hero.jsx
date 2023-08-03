import { lazy } from "react";
import pngImg2x from "../assets/hero-img.png";
import pngImg1x from "../assets/hero-img-1.png";
import webpImg2x from "../assets/hero-img.webp";
import webpImg1x from "../assets/hero-img-1.webp";
import { NavButton } from "../button";
import HeroHeading from "./../abstract-components/heroHeading";
import { pictureSource } from "../../utilities/getVariables";

// === Picture Element
const Picture = lazy(() => import("../picture"));

const Hero = () => {
  // === Rendering all picture sources
  const sources = pictureSource(640, pngImg2x, pngImg1x, webpImg2x, webpImg1x);

  return (
    <section className="relative laptop:pb-20 laptop:pt-30">
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>
      <div className="grid gap-y-2.5 bigTab:gap-y-5 laptop:gap-x-5 laptop:grid-cols-2">
        <div className="max-w-[600px] my-auto tab:px-30px bigTab:px-50px laptop:px-5">
          <HeroHeading />
          <NavButton
            to="/login"
            label="Learn More"
            extraStyles="active:scale-105 !bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 px-30px py-3.5 text-white"
          />
        </div>
        <div className="-mt-20 tab:mt-5 laptop:mt-0">
          <Picture
            sources={sources}
            src={pngImg2x}
            imgClasses="relative object-stretch scale-x-[1.11] w-full -z-10 tab:-ml-100px tab:overflow-y-visible tab:scale-150 laptop:max-h-full laptop:-ml-0 laptop:scale-[1.3]"
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
