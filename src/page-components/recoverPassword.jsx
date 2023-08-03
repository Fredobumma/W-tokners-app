import { Suspense, lazy, useContext, useState } from "react";
import Joi from "./../services/validatorService";
import { passwordRecovery } from "../services/authService";
import logger from "../services/logService";
import ValidatorContext from "../context/validatorContext";
import FormContext from "../context/formContext";
import Loader from "../common/block-components/loader";
import { clearNotify, mapErrorTo } from "../utilities/helpers";
import { getFormData } from "../utilities/getVariables";

const FormPage = lazy(() => import("../common/formPage"));

const RecoverPassword = () => {
  const validator = useContext(ValidatorContext);

  const [state, setState] = useState({
    data: { email: "" },
    errors: {},
    success: "",
  });
  const [loader, setLoader] = useState(false);

  const schema = {
    email: Joi.string().email().min(5).max(60).required().label("E-mail"),
  };

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

  const { form, data, error, checkError, success } = getFormData(
    state,
    schema,
    validator,
    doSubmit,
    setState
  );

  const fields = [
    { id: "email", placeholder: "E-mail address", maxLength: "40" },
  ];

  return (
    <Suspense fallback={<Loader />}>
      <FormContext.Provider
        value={{
          guide: {
            text1:
              "In case you lost your password, Recover using your email...",
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
    </Suspense>
  );
};

export default RecoverPassword;
