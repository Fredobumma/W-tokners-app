import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Joi from "../../services/validatorService";
import { setData } from "../../services/httpService";
import { loginWithJwt, signIn } from "../../services/authService";
import logger from "./../../services/logService";
import ValidatorContext from "../../context/validatorContext";
import FormContext from "./../../context/formContext";
import Loader from "./loader";
import FormPage from "../formPage";
import { clearNotify, mapErrorTo } from "../../utilities/helpers";
import { getFormData } from "../../utilities/getVariables";

const LoginForm = () => {
  // === Page Context and Location
  const location = useLocation();
  const validator = useContext(ValidatorContext);

  // === Page State
  const [state, setState] = useState({
    data: { email: "", password: "" },
    errors: {},
    success: "",
  });
  const [loader, setLoader] = useState(false);

  // === Schema Validator
  const schema = {
    email: Joi.string().email().min(5).max(40).required().label("E-mail"),
    password: Joi.string().min(8).max(30).required().label("Password"),
  };

  // === Handler
  // handling user login
  const doSubmit = async () => {
    setLoader(true);
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

    setLoader(false);
    setState({ ...obj });
    clearNotify(obj, setState);
  };

  // ===  Extracting and Destructuring form data
  const { form, data, error, checkError, success } = getFormData(
    state,
    schema,
    validator,
    doSubmit,
    setState
  );

  // === Authentication Data Details
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
      {loader && <Loader />}
      <FormPage />
    </FormContext.Provider>
  );
};

export default LoginForm;
