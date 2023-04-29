import { useContext, useState } from "react";
import Joi from "joi-browser";
import jwtDecode from "jwt-decode";
import { getData, setData } from "../../services/httpService";
import { getJwt } from "../../services/authService";
import logger from "./../../services/logService";
import ThemeContext from "../../context/themeContext";
import ValidatorContext from "../../context/validatorContext";
import { clearError, mapErrorTo } from "../../utilities/helper";
import { SVG } from "../svg";
import Button from "./../button";

const documentName = "users";

const WhitelistForm = () => {
  const { theme } = useContext(ThemeContext);
  const validator = useContext(ValidatorContext);

  const [state, setState] = useState({ data: { email: "" }, errors: {} });

  const schema = {
    email: Joi.string().email().min(5).max(60).required().label("E-mail"),
  };

  const doSubmit = async (e) => {
    const obj = { ...state };
    const { value } = e.target[0];
    const { email: userEmail } = jwtDecode(getJwt());

    if (value !== userEmail) {
      obj.errors.email = "Input currently signed in E-mail";
      return setState({ ...obj });
    }

    try {
      const dataObj = await getData(documentName, userEmail);

      if (dataObj.exists() && dataObj.data().whitelisted) {
        obj.errors.generic = "Already whitelisted";
        return setState({ ...obj });
      }

      await setData(documentName, userEmail, { whitelisted: true });
      // TODO: SHOW ERROR, SEND EMAIL AND NOTIFY USER ("AN EMAIL WOULD BE SENT TO VERIFY THAT YOU'RE SHORTLISTED")
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      setState({ ...obj });
      logger.log(error);

      clearError(obj, setState);
    }
  };

  const form = new validator(state, setState, schema, doSubmit);
  const data = Object.values(state.data).filter((el) => el === "").length;
  const error = Object.values(state.errors);
  const checkError = !state.errors.generic && error[0];

  return (
    <section className="pb-20 pt-10 relative tab:pb-120px tab:pt-60px bigTab:pb-20 laptop:pb-0 laptop:pt-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>{" "}
      <div className="flex flex-col gap-10 max-w-512 mx-auto tab:max-w-640 bigTab:gap-50px bigTab:max-w-700 laptop:gap-0 laptop:max-w-1024">
        <div
          className={`px-8 py-12 rounded-all self-end text-center w-full z-10 laptop:mr-10 laptop:-mt-120px laptop:order-2 laptop:w-5/12 desktop:mr-50px ${
            theme ? "bg-lightGuideCard" : "bg-guideCard"
          }`}
        >
          <span className="inline-block mx-auto">
            <SVG id="namedLogo" />
          </span>
          <p className="font-bold text-sm leading-4 mb-60px mt-5 bigTab:text-base bigTab:leading-5 desktop:text-xl desktop:leading-7">
            Enter your email to join the whitelist. Don't be late!
          </p>
          {/* TODO: for popup notification ==== "A confirmation email would be sent to your email if you're successfully enlisted" */}
          <p className="decoration-inherit font-bold text-xs leading-5 underline underline-offset-4 bigTab:leading-5 desktop:leading-54 desktop:text-sm">
            Go back ?
          </p>
          <Button
            label="Back"
            extraStyles="active:bg-secondary bg-transparent border-2 border-secondary focus:bg-secondary hover:bg-secondary mt-5 px-10 py-3 transform-gpu transform transition-all duration-300"
          />
        </div>
        <div className="relative max-w-full">
          <div className="absolute animate-switch-gradient bg-400% inset-0 bg-form mx-30px -rotate-2 rounded-all shadow-lg -skew-y-[5deg] tab:mx-10 bigTab:mx-50px bigTab:-skew-y-[4deg] laptop:mx-16 laptop:-skew-y-2"></div>
          <div
            className={`relative rounded-all py-60px shadow-lg tab:py-20 bigTab:py-24 laptop:py-120px ${
              theme ? "bg-dark" : "bg-white"
            }`}
          >
            <form
              onSubmit={form.handleSubmit}
              className="grid gap-30px px-30px tab:px-50px bigTab:px-70px laptop:px-100px"
            >
              {error[0] && (
                <span className="text-center text-red text-xs">{error[0]}</span>
              )}
              <span
                className={`flex border-b-2 gap-2 items-center ${
                  theme ? "border-light" : "border-dark"
                }`}
              >
                <label htmlFor="email">
                  <SVG id="email" />
                </label>
                {form.renderInput(
                  "email",
                  "email",
                  "email",
                  "E-mail address",
                  "email",
                  "on"
                )}
              </span>
              <div>
                <Button
                  label="Submit"
                  extraStyles={`active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 mt-3 px-30px py-3.5 transform-gpu transform transition-all duration-300 ${
                    (checkError || data) &&
                    `cursor-not-allowed ${theme ? "opacity-30" : "opacity-40"}`
                  }`}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitelistForm;
