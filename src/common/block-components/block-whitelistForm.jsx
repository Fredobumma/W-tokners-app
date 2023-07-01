import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Joi from "joi-browser";
import { getData, setData } from "../../services/httpService";
import logger from "./../../services/logService";
import AuthContext from "../../context/authContext";
import ValidatorContext from "../../context/validatorContext";
import FormContext from "../../context/formContext";
import FormPage from "../formPage";
import Loader from "./loader";
import { clearNotify, mapErrorTo } from "../../utilities/helpers";
import { getFormData } from "../../utilities/getVariables";

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
  const [loader, setLoader] = useState(false);

  const schema = {
    email: Joi.string().email().min(5).max(40).required().label("E-mail"),
  };

  const doSubmit = async (e) => {
    setLoader(true);
    const obj = { ...state };
    const { value } = e.target[0];

    if (value !== userEmail) {
      setLoader(false);

      obj.errors.email = "Input currently signed in E-mail";
      setState({ ...obj });
      return clearNotify(obj, setState);
    }

    try {
      const dataObj = await getData(documentName, userEmail);

      if (dataObj.exists() && dataObj.data().whitelisted) {
        setLoader(false);

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
      {loader && <Loader />}
      <FormPage />
    </FormContext.Provider>
  );
};

export default WhitelistForm;
