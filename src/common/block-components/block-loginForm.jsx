import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Joi from "joi-browser";
import { setData } from "../../services/httpService";
import { loginWithJwt, signIn } from "../../services/authService";
import logger from "./../../services/logService";
import ValidatorContext from "../../context/validatorContext";
import FormGuide from "../formGuide";
import Button from "./../button";
import { clearNotify, mapErrorTo } from "../../utilities/helpers";
import FormContent from "../formContent";

const LoginForm = () => {
  const location = useLocation();
  const validator = useContext(ValidatorContext);

  const [state, setState] = useState({
    data: { email: "", password: "" },
    errors: {},
  });

  const schema = {
    email: Joi.string().email().min(5).max(60).required().label("E-mail"),
    password: Joi.string().min(8).max(30).required().label("Password"),
  };

  const doSubmit = async () => {
    const obj = { ...state };
    const { email, password } = obj.data;

    try {
      const { user } = await signIn(email, password);
      await setData("users", email, { email, password });
      loginWithJwt(user.accessToken);

      window.location = location.state?.from || "/";
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

  const formFields = [
    { id: "email", placeholder: "E-mail address" },
    {
      id: "password",
      placeholder: "Password",
      autocomplete: "current-password",
    },
  ];

  return (
    <section className="pb-20 pt-10 relative tab:pb-120px tab:pt-60px bigTab:pb-20 laptop:pb-0 laptop:pt-20">
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>
      <div className="flex flex-col gap-10 max-w-512 mx-auto tab:max-w-640 bigTab:gap-50px bigTab:max-w-700 laptop:gap-0 laptop:max-w-1024">
        <FormGuide />
        <div className="relative max-w-full">
          <div className="absolute animate-switch-gradient bg-400% inset-0 bg-form mx-30px -rotate-2 rounded-all shadow-lg -skew-y-[5deg] tab:mx-10 bigTab:mx-50px bigTab:-skew-y-[4deg] laptop:mx-16 laptop:-skew-y-2"></div>
          <div className="bg-dark py-60px relative rounded-all shadow-lg tab:py-20 bigTab:py-24 laptop:py-120px dark:bg-white">
            <form
              onSubmit={form.handleSubmit}
              className="grid gap-30px px-30px tab:px-50px bigTab:px-70px laptop:px-100px"
            >
              <FormContent error={error} fields={formFields} form={form} />
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

export default LoginForm;
