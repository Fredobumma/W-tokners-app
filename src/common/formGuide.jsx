import { SVG } from "./svg";
import { NavButton } from "./button";

const FormGuide = () => {
  return (
    <div className="bg-lightGuideCard px-8 py-12 rounded-all self-end text-center w-full z-10 laptop:mr-10 laptop:-mt-120px laptop:order-2 laptop:w-5/12 desktop:mr-50px dark:bg-guideCard">
      <span className="inline-block mx-auto">
        <SVG id="logo" />
      </span>
      <p className="font-bold text-sm leading-4 mb-60px mt-5 bigTab:text-base bigTab:leading-5 desktop:text-xl desktop:leading-7">
        To access more, Login and get whitelisted...
      </p>
      <p className="decoration-inherit font-bold text-xs leading-5 underline underline-offset-4 bigTab:leading-5 desktop:leading-54 desktop:text-sm">
        Don't have a Tokners account ?
      </p>
      <NavButton
        to="/register"
        label="Register"
        extraStyles="border-2 border-secondary focus:drop-shadow-button hover:drop-shadow-button mt-5 px-10 py-3"
      />
    </div>
  );
};

export default FormGuide;
