import { useContext, useState } from "react";
import Joi from "joi-browser";
import { setData } from "../../services/httpService";
import { loginWithJwt, signUp, updateUser } from "../../services/authService";
import logger from "../../services/logService";
import ValidatorContext from "../../context/validatorContext";
import FormContext from "../../context/formContext";
import FormPage from "../formPage";
import { clearNotify, mapErrorTo } from "../../utilities/helpers";

const RegisterForm = () => {
  const validator = useContext(ValidatorContext);

  const [state, setState] = useState({
    data: { username: "", email: "", password: "" },
    errors: {},
    success: "",
  });

  const schema = {
    username: Joi.string().min(3).max(20).required().label("Username"),
    email: Joi.string().email().min(5).max(40).required().label("E-mail"),
    password: Joi.string().min(8).max(30).required().label("Password"),
  };

  const doSubmit = async () => {
    const obj = { ...state };
    const { username, email, password } = obj.data;

    try {
      const { user } = await signUp(email, password);
      await updateUser(user, { displayName: username });
      await setData("users", email, { username, email, password });
      loginWithJwt(user.accessToken);

      obj.success = "Login Success";
      window.location = "/";
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
    { id: "username", placeholder: "Username", type: "text", maxLength: "20" },
    { id: "email", placeholder: "E-mail address", maxLength: "40" },
    {
      id: "password",
      placeholder: "Password",
      autoComplete: "new-password",
      maxLength: "30",
    },
  ];

  return (
    <FormContext.Provider
      value={{
        guide: {
          text1: "To access more, Register and get whitelisted...",
          text2: "Already have a Tokners account ?",
          path: "/login",
          name: "Sign In",
        },
        body: { form, fields, success, error, checkError, data },
      }}
    >
      <FormPage />
    </FormContext.Provider>
  );
};

export default RegisterForm;
