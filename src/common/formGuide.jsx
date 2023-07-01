import { useContext } from "react";
import FormContext from "../context/formContext";
import { NavButton } from "./button";
import { SVG } from "./svg";

const FormGuide = () => {
  const {
    guide: { text1, text2, path, name },
  } = useContext(FormContext);

  return (
    <div className="bg-lightGuideCard px-8 py-12 rounded-all self-end text-center w-full z-10 laptop:mr-10 laptop:-mt-120px laptop:order-2 laptop:w-5/12 desktop:mr-50px dark:bg-guideCard">
      <span className="inline-block mx-auto">
        <SVG id="logo" />
      </span>
      <p className="font-bold text-sm leading-4 mb-60px mt-5 bigTab:text-base bigTab:leading-5 desktop:text-xl desktop:leading-7">
        {text1}.
      </p>
      <p className="decoration-inherit font-bold text-xs leading-5 underline underline-offset-4 bigTab:leading-5 desktop:leading-54 desktop:text-sm">
        {text2}
      </p>
      <NavButton
        to={path}
        label={name}
        extraStyles="border-2 border-secondary focus:drop-shadow-button hover:drop-shadow-button mt-5 px-10 py-3"
      />
    </div>
  );
};

export default FormGuide;
