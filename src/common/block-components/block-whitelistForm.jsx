import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Joi from "joi-browser";
import { getData, setData } from "../../services/httpService";
import logger from "./../../services/logService";
import AuthContext from "../../context/authContext";
import ValidatorContext from "../../context/validatorContext";
import FormContext from "../../context/formContext";
import FormPage from "../formPage";
import { clearNotify, mapErrorTo } from "../../utilities/helpers";

const documentName = "users";

const WhitelistForm = () => {
  const location = useLocation();
  const validator = useContext(ValidatorContext);
  const userEmail = useContext(AuthContext)?.email;

  const [state, setState] = useState({
    data: { email: "" },
    errors: {},
    success: "",
  });

  const schema = {
    email: Joi.string().email().min(5).max(40).required().label("E-mail"),
  };

  const doSubmit = async (e) => {
    const obj = { ...state };
    const { value } = e.target[0];

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

      obj.success = "Successfully shortlisted for W-Token";
      obj.data.email = "";
      // TODO: SHOW ERROR, SEND EMAIL AND NOTIFY USER ("AN EMAIL WOULD BE SENT TO VERIFY THAT YOU'RE SHORTLISTED")
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
  ];

  return (
    <FormContext.Provider
      value={{
        guide: {
          text1: "Enter your email to join the whitelist. Don't be late!",
          text2: "Go back ?",
          path: location.state?.from || "/",
          name: "Back",
        },
        body: { form, fields, success, error, checkError, data },
      }}
    >
      <FormPage />
    </FormContext.Provider>
  );
};

export default WhitelistForm;
