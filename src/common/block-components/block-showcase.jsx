import { lazy } from "react";
import pngImg2x from "../assets/showcase-bg.png";
import pngImg1x from "../assets/showcase-bg-1.png";
import webpImg2x from "../assets/showcase-bg.webp";
import webpImg1x from "../assets/showcase-bg-1.webp";
import SVG from "../assets/svgs/allSvg";
import { NavButton } from "../button";
import Collapsible from "../abstract-components/collapsible";
import ShowcaseContent from "./../abstract-components/showcaseContent";
import { pictureSource } from "../../utilities/getVariables";

const Picture = lazy(() => import("../picture"));

const Showcase = ({ collapse, toggle }) => {
  // === Rendering all picture sources
  const sources = pictureSource(1280, pngImg2x, pngImg1x, webpImg2x, webpImg1x);

  return (
    <section className="pb-10 tab:pt-30px tab:pb-60px bigTab:pt-60px bigTab:pb-[80px] laptop:py-0">
      <div className="grid gap-y-70px bigTab:grid-cols-2 bigTab:gap-x-10">
        <div className="order-last bigTab:order-first">
          <h2 className="flex flex-col font-bold gap-y-2.5 text-32 leading-10 mb-30px tab:text-40 laptop:flex-row laptop:gap-x-6 laptop:items-center desktop:mb-10 desktop:text-5xl desktop:leading-54">
            <SVG id="logo" />
            Tokner is coming
          </h2>
          <ShowcaseContent collapse={collapse} />
          <NavButton
            to="login"
            label="Know More"
            extraStyles="border-2 border-secondary focus:drop-shadow-button hover:drop-shadow-button my-5 px-10 py-3"
          />
          <Collapsible collapse={collapse} toggle={toggle} />
        </div>
        <Picture
          sources={sources}
          src={pngImg2x}
          imgClasses="mx-auto"
          alt="A woman holding her phone"
        />
      </div>
    </section>
  );
};

export default Showcase;
