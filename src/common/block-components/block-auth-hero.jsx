import { lazy } from "react";
import pngImg2x from "../images/wallet-hero-img.png";
import pngImg1x from "../images/wallet-hero-img-1.png";
import webpImg2x from "../images/wallet-hero-img.webp";
import webpImg1x from "../images/wallet-hero-img-1.webp";
import Auth_heroHeading from "../abstract-components/auth-heroHeading";
import Auth_HeroContent from "../abstract-components/auth-heroContent";
import { pictureSource } from "../../utilities/getVariables";

const Picture = lazy(() => import("../picture"));

const Hero = () => {
  const sources = pictureSource(1024, pngImg2x, pngImg1x, webpImg2x, webpImg1x);

  return (
    <section className="relative tab:py-10 laptop:py-20">
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>{" "}
      <div>
        <Auth_heroHeading />
        <div className="grid justify-items-center max-w-400 mx-auto tab:max-w-700 laptop:gap-10 laptop:grid-cols-3 laptop:max-w-full desktop:gap-60px desktop:mt-10">
          <div className="justify-self-end laptop:justify-self-start">
            <Auth_HeroContent
              paragraph1="Premined Tokens"
              value="3,000,000,000"
              valueColor="text-blue-600"
            />
          </div>
          <div className="justify-self-start mb-55px mt-5 tab:mb-88px tab:mt-10 laptop:justify-self-end laptop:m-0 laptop:order-1 laptop:self-end desktop:-mb-30">
            <Auth_HeroContent
              paragraph1="Daily Token Distribution"
              value="7,000,000,000"
              valueColor="text-red"
            />
          </div>
          <div className="laptop:mt-5 desktop:mt-10">
            <Picture
              sources={sources}
              src={pngImg2x}
              imgClasses="object-stretch scale-[1.11] w-full tab:scale-125 bigTab:scale-150 desktop:scale-[2]"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
