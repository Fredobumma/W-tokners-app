import { useContext, useState } from "react";
import Joi from "./../services/validatorService";
import { passwordRecovery } from "../services/authService";
import logger from "../services/logService";
import ValidatorContext from "../context/validatorContext";
import FormContext from "../context/formContext";
import Loader from "../common/block-components/loader";
import FormPage from "../common/formPage";
import { clearNotify, mapErrorTo } from "../utilities/helpers";
import { getFormData } from "../utilities/getVariables";

const RecoverPassword = () => {
  // === Page Context
  const validator = useContext(ValidatorContext);

  // === Page State
  const [state, setState] = useState({
    data: { email: "" },
    errors: {},
    success: "",
  });
  const [loader, setLoader] = useState(false);

  // === Schema Validator
  const schema = {
    email: Joi.string().email().min(5).max(60).required().label("E-mail"),
  };

  // === Handler
  // handling password reset
  const doSubmit = async (e) => {
    setLoader(true);
    const obj = { ...state };
    const { value: inputEmail } = e.target[0];

    try {
      await passwordRecovery(inputEmail);

      obj.success = "Kindly check your email to set new Password";
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
  ];

  return (
    <FormContext.Provider
      value={{
        guide: {
          text1: "In case you lost your password, Recover using your email...",
          text2: "Go back and login ?",
          path: "/login",
          name: "Login",
        },
        body: { form, fields, success, error, checkError, data },
      }}
    >
      {loader && <Loader />}
      <FormPage />
    </FormContext.Provider>
  );
};

export default RecoverPassword;
