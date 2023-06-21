import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Joi from "joi-browser";
import { setData } from "../../services/httpService";
import { loginWithJwt, signIn } from "../../services/authService";
import logger from "./../../services/logService";
import ValidatorContext from "../../context/validatorContext";
import FormContext from "./../../context/formContext";
import FormPage from "../formPage";
import { clearNotify, mapErrorTo } from "../../utilities/helpers";

const LoginForm = () => {
  const location = useLocation();
  const validator = useContext(ValidatorContext);

  const [state, setState] = useState({
    data: { email: "", password: "" },
    errors: {},
    success: "",
  });

  const schema = {
    email: Joi.string().email().min(5).max(40).required().label("E-mail"),
    password: Joi.string().min(8).max(30).required().label("Password"),
  };

  const doSubmit = async () => {
    const obj = { ...state };
    const { email, password } = obj.data;

    try {
      const { user } = await signIn(email, password);
      await setData("users", email, { email, password });
      loginWithJwt(user.accessToken);

      obj.success = "Login Success";
      window.location = location.state?.from || "/";
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);
    }

    setState({ ...obj });
    clearNotify(obj, setState);
  };

  const form = new validator(state, setState, schema, doSubmit);
  const data = Object.values(state.data).filter((el) => el === "").length;
  const error = Object.values(state.errors);
  const checkError = !state.errors.generic && error[0];
  const { success } = state;

  const fields = [
    { id: "email", placeholder: "E-mail address", maxLength: "40" },
    {
      id: "password",
      placeholder: "Password",
      autoComplete: "current-password",
      maxLength: "30",
    },
  ];

  return (
    <FormContext.Provider
      value={{
        guide: {
          text1: "To access more, Login and get whitelisted...",
          text2: "Don't have a Tokners account ?",
          path: "/register",
          name: "Register",
        },
        body: { form, fields, success, error, checkError, data },
      }}
    >
      <FormPage />
    </FormContext.Provider>
  );
};

export default LoginForm;
