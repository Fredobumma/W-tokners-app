import { useContext, useState } from "react";
import Joi from "joi-browser";
import { passwordRecovery } from "../services/authService";
import logger from "../services/logService";
import ValidatorContext from "../context/validatorContext";
import { clearNotify, mapErrorTo } from "../utilities/helpers";
import { SVG } from "../common/svg";
import Button, { NavButton } from "./../common/button";

const RecoverPassword = () => {
  const validator = useContext(ValidatorContext);

  const [state, setState] = useState({ data: { email: "" }, errors: {} });

  const schema = {
    email: Joi.string().email().min(5).max(60).required().label("E-mail"),
  };

  const doSubmit = async (e) => {
    const obj = { ...state };
    const { value: inputEmail } = e.target[0];

    try {
      await passwordRecovery(inputEmail);
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      setState({ ...obj });
      logger.log(error);

      clearNotify(obj, setState);
    }
  };

  const form = new validator(state, setState, schema, doSubmit);
  const data = Object.values(state.data).filter((el) => el === "").length;
  const error = Object.values(state.errors);
  const checkError = !state.errors.generic && error[0];

  return (
    <section className="pb-20 pt-10 relative tab:pb-120px tab:pt-60px bigTab:pb-20 laptop:pb-0 laptop:pt-20">
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>
      <div className="flex flex-col gap-10 max-w-512 mx-auto tab:max-w-640 bigTab:gap-50px bigTab:max-w-700 laptop:gap-0 laptop:max-w-1024">
        <div className="bg-lightGuideCard px-8 py-12 rounded-all self-end text-center w-full z-10 laptop:mr-10 laptop:-mt-120px laptop:order-2 laptop:w-5/12 desktop:mr-50px dark:bg-guideCard">
          <span className="inline-block mx-auto">
            <SVG id="logo" />
          </span>
          <p className="font-bold text-sm leading-4 mb-60px mt-5 bigTab:text-base bigTab:leading-5 desktop:text-xl desktop:leading-7">
            In case you lost your password, Recover using your email...
          </p>
          <p className="decoration-inherit font-bold text-xs leading-5 underline underline-offset-4 bigTab:leading-5 desktop:leading-54 desktop:text-sm">
            Go back and login ?
          </p>
          <NavButton
            to="/login"
            label="Login"
            extraStyles="border-2 border-secondary focus:drop-shadow-button hover:drop-shadow-button mt-5 px-10 py-3"
          />
        </div>
        <div className="relative max-w-full">
          <div className="absolute animate-switch-gradient bg-400% inset-0 bg-form mx-30px -rotate-2 rounded-all shadow-lg -skew-y-[5deg] tab:mx-10 bigTab:mx-50px bigTab:-skew-y-[4deg] laptop:mx-16 laptop:-skew-y-2"></div>
          <div className="bg-dark relative rounded-all py-60px shadow-lg tab:py-20 bigTab:py-24 laptop:py-120px dark:bg-white">
            <form
              onSubmit={form.handleSubmit}
              className="grid gap-30px px-30px tab:px-50px bigTab:px-70px laptop:px-100px"
            >
              {error[0] && (
                <span className="text-center text-red text-xs">{error[0]}</span>
              )}
              <span className="flex border-b-2 border-light gap-2 items-center dark:border-dark">
                <label htmlFor="email">
                  <SVG id="email" />
                </label>
                {form.renderInput(
                  "email",
                  "email",
                  "email",
                  "E-mail address",
                  "email"
                )}
              </span>
              <div>
                <Button
                  label="Submit"
                  extraStyles={
                    (checkError || data) &&
                    "cursor-not-allowed opacity-30 dark:opacity-40"
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoverPassword;
