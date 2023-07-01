import { useCallback, useContext, useEffect, useState } from "react";
import Joi from "joi-browser";
import { deleteData, getData, setData } from "../../services/httpService";
import {
  loginWithJwt,
  signIn,
  updateEmail,
  updatePassword,
  updateUser,
} from "../../services/authService";
import logger from "./../../services/logService";
import AuthContext from "../../context/authContext";
import ValidatorContext from "../../context/validatorContext";
import Loader from "./loader";
import { AuthForm, PersonalForm } from "../profileForm";
import { DateInput } from "../input";
import SelectOptions from "../selectOptions";
import Heading from "./../abstract-components/profileHeading";
import { clearNotify, mapErrorTo, capitalize } from "../../utilities/helpers";

const documentName = "users";

const UserProfile = () => {
  const validator = useContext(ValidatorContext);
  const userEmail = useContext(AuthContext)?.email;

  const [login, setLogin] = useState({
    data: { username: "", email: "", password: "" },
    errors: {},
    success: "",
  });
  const [userData, setUserData] = useState({});
  const [loader, setLoader] = useState(false);

  const schema = {
    username: Joi.string().min(3).max(30).required().label("Username"),
    email: Joi.string().email().min(5).max(50).required().label("E-mail"),
    password: Joi.string().min(8).max(40).required().label("Password"),
  };

  const formObj = () => {
    const form = new validator(login, setLogin, schema);
    const { success } = login;
    const errors = Object.entries(login.errors)
      .filter((el) => !el[1].includes("is not allowed to be empty"))
      .reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {});

    const data = (prop) => login.data[prop] === "";

    return { form, success, errors, data };
  };

  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
    setLoader(true);

    const obj = { ...login };
    const { username } = obj.data;

    if (!username || obj.errors.username) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updateUser(user, { displayName: username });
      await setData(documentName, userEmail, { username });
      loginWithJwt(user.accessToken);

      obj.success = `Updated your "Username" sucessfully`;
      obj.data.username = "";
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);
    }

    setLoader(false);
    setLogin({ ...obj });
    clearNotify(obj, setLogin);
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    setLoader(true);

    const obj = { ...login };
    const userObj = { ...userData };
    const { email } = obj.data;

    if (!email || obj.errors.email) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updateEmail(user, email);
      await deleteData(documentName, userEmail);
      await setData(documentName, email, { ...userObj, email });
      loginWithJwt(user.accessToken);

      obj.success = `Updated your "E-mail Address" successfully`;
      obj.data.email = "";
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);
    }

    setLoader(false);
    setLogin({ ...obj });
    clearNotify(obj, setLogin);
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    setLoader(true);

    const obj = { ...login };
    const { password: newPassword } = obj.data;

    if (!newPassword || obj.errors.password) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updatePassword(user, newPassword);
      await setData(documentName, userEmail, { password: newPassword });
      loginWithJwt(user.accessToken);

      obj.success = `Updated your "Password" successfully`;
      obj.data.password = "";
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);
    }

    setLoader(false);
    setLogin({ ...obj });
    clearNotify(obj, setLogin);
  };

  const handlePersonalData = async (e) => {
    e.preventDefault();
    setLoader(true);

    const obj = { ...login };
    const prop = [
      "fullName",
      "dob",
      "country",
      "street",
      "city",
      "state",
      "zipCode",
    ];
    const personalInfo = prop.reduce(
      (a, b, i) => ({
        ...a,
        [b]: capitalize(e.target[i].value) || userData.personalInfo?.[b],
      }),
      {}
    );

    if (Object.values(personalInfo).every((el) => !el)) return;

    try {
      await setData(documentName, userEmail, { personalInfo });

      prop.forEach((_el, i) => (e.target[i].value = ""));
      setUserData({ ...userData, personalInfo });
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      logger.log(error);

      setLogin({ ...obj });
      clearNotify(obj, setLogin);
    }
    setLoader(false);
  };

  const getUserData = useCallback(async () => {
    const obj = await getData(documentName, userEmail);
    return obj;
  }, [userEmail]);

  useEffect(() => {
    setLoader(true);

    const obj = { ...login };
    try {
      const data = async () => {
        const userObj = await getUserData();
        if (userObj.exists()) setUserData({ ...userObj.data() });
      };
      data();
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      setLogin({ ...obj });
      logger.log(error);

      clearNotify(obj, setLogin);
    }
    setLoader(false);
  }, [getUserData]);

  const { fullName, dob, country, street, city, state, zipCode } =
    userData.personalInfo || {};
  const { form, success, errors, data } = formObj();

  const date = new Date();
  const year = date.getFullYear();

  const countryValues = [
    "",
    "United States",
    "United Kingdom",
    "Canada",
    "China",
    "Australia",
    "Argentina",
  ];

  const authFields = [
    {
      id: "username",
      placeholder: "Username",
      type: "text",
      maxLength: "20",
      handler: handleUsernameUpdate,
    },
    {
      id: "email",
      placeholder: "E-mail address",
      maxLength: "40",
      handler: handleEmailUpdate,
    },
    {
      id: "password",
      placeholder: "Password",
      autoComplete: "new-password",
      maxLength: "30",
      handler: handlePasswordUpdate,
    },
  ];

  const personalFields = [
    {
      label: "Full Name",
      autoComplete: "name",
      id: "fullname",
      name: "fullname",
      type: "text",
      placeholder: fullName || "Firstname Lastname",
      minLength: "4",
      maxLength: "30",
    },
    {
      Component: (props) => <DateInput {...props} />,
      label: "Date of Birth",
      autoComplete: "bday",
      id: "date",
      name: "date",
      type: "text",
      placeholder: dob || "mm/dd/yyyy",
      min: "1900-01-01",
      max: `${year - 7}-01-01`,
    },
    {
      Component: (props) => <SelectOptions {...props} />,
      label: "Country",
      id: "country",
      autoComplete: "country-name",
      country,
      ...countryValues,
    },
    {
      label: "Street Address",
      autoComplete: "street-address",
      id: "street",
      name: "street",
      type: "text",
      placeholder: street || "Enter your street address",
      minLength: "5",
      maxLength: "100",
    },
    {
      label: "City",
      autoComplete: "on",
      id: "city",
      name: "city",
      type: "text",
      placeholder: city || "Enter your city",
      minLength: "3",
      maxLength: "30",
    },
    {
      label: "State / Province",
      autoComplete: "on",
      id: "state",
      name: "state",
      type: "text",
      placeholder: state || "Enter your state / province",
      minLength: "3",
      maxLength: "30",
    },
    {
      label: "ZIP / Postal Code",
      autoComplete: "postal-code",
      id: "zipcode",
      name: "zipcode",
      type: "number",
      placeholder: zipCode || "000000",
      minLength: "4",
      maxLength: "15",
    },
  ];

  return (
    <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
      {loader && <Loader />}
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>
      <h1 className="font-bold text-28 leading-54 mb-10 mx-5 tab:mb-10 tab:mx-10 tab:text-32 bigTab:mx-60px laptop:mb-60px desktop:mb-20 desktop:text-4xl">
        Profile Settings
      </h1>
      <div className="relative max-w-full">
        <div className="bg-dark relative rounded-all py-60px shadow-lg text-light laptop:py-24 dark:bg-white dark:text-dark">
          <div className="mb-10 px-30px tab:px-50px bigTab:px-70px laptop:px-100px">
            <Heading
              sectionHeader="Profile Login Information"
              text="Update your login information."
            />
          </div>
          <AuthForm
            form={form}
            success={success}
            errors={errors}
            inputs={authFields}
            validateData={data}
          />
          <div className="mb-10 mt-60px px-30px tab:px-50px bigTab:px-70px laptop:mt-24 laptop:px-100px">
            <Heading
              sectionHeader="Profile Personal Information - Optional"
              text="Tell us more about yourself."
            />
          </div>
          <PersonalForm
            success={success}
            errors={errors}
            inputs={personalFields}
            handler={handlePersonalData}
          />
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
