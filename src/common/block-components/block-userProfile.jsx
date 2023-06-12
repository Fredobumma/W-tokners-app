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
import { clearNotify, mapErrorTo, capitalize } from "../../utilities/helpers";
import { SVG } from "../svg";
import { DateInput, SecondaryInput } from "../input";
import SelectOptions from "../selectOptions";
import Button from "../button";

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

  const schema = {
    username: Joi.string().min(3).max(30).required().label("Username"),
    email: Joi.string().email().min(5).max(50).required().label("E-mail"),
    password: Joi.string().min(8).max(40).required().label("Password"),
  };

  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
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
      setLogin({ ...obj });

      clearNotify(obj, setLogin);
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      setLogin({ ...obj });
      logger.log(error);

      clearNotify(obj, setLogin);
    }
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
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
      setLogin({ ...obj });

      clearNotify(obj, setLogin);
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      setLogin({ ...obj });
      logger.log(error);

      clearNotify(obj, setLogin);
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
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
      setLogin({ ...obj });

      clearNotify(obj, setLogin);
    } catch (error) {
      obj.errors.generic = mapErrorTo(error.code);
      setLogin({ ...obj });
      logger.log(error);

      clearNotify(obj, setLogin);
    }
  };

  const handlePersonalData = async (e) => {
    e.preventDefault();

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
      setLogin({ ...obj });
      logger.log(error);

      clearNotify(obj, setLogin);
    }
  };

  const getUserData = useCallback(async () => {
    const obj = await getData(documentName, userEmail);
    return obj;
  }, [userEmail]);

  useEffect(() => {
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
  }, [getUserData]);

  const form = new validator(login, setLogin, schema);
  const errors = Object.entries(login.errors)
    .filter((el) => !el[1].includes("is not allowed to be empty"))
    .reduce((a, b) => ({ ...a, [b[0]]: b[1] }), {});
  const data = (prop) => login.data[prop] === "";
  const { success } = login;

  const { fullName, dob, country, street, city, state, zipCode } =
    userData.personalInfo || {};

  return (
    <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
      <div className="absolute bg-aside blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] dark:bg-darkAside"></div>
      <h1 className="font-bold text-28 leading-54 mb-10 mx-5 tab:mb-10 tab:mx-10 tab:text-32 bigTab:mx-60px laptop:mb-60px desktop:mb-20 desktop:text-4xl">
        Profile Settings
      </h1>
      <div className="relative max-w-full">
        <div className="bg-dark relative rounded-all py-60px shadow-lg text-light laptop:py-24 dark:bg-white dark:text-dark">
          <div className="mb-10 px-30px tab:px-50px bigTab:px-70px laptop:px-100px">
            <h2 className="font-bold leading-10 text-xl">
              Profile Login Information
            </h2>
            <p className="text-sm">Update your login information.</p>
          </div>
          <form className="border-b grid gap-30px pb-10 px-30px tab:pb-60px tab:px-50px bigTab:px-70px laptop:pb-20 laptop:px-100px">
            {errors.generic && (
              <span className="text-center text-red text-xs">
                {errors.generic}
              </span>
            )}
            {success && (
              <span className="font-bold text-center text-green-600 text-xs">
                {success}
              </span>
            )}
            <div className="tab:flex tab:items-end tab:justify-around">
              <div className="tab:w-3/5">
                {errors.username && (
                  <span className="text-red text-xs">{errors.username}</span>
                )}
                <span className="flex border-b-2 border-light gap-2 items-center mt-2.5 border-dark">
                  <label htmlFor="username">
                    <SVG id="username" />
                  </label>
                  {form.renderInput(
                    "username",
                    "username",
                    "text",
                    "Username",
                    "username",
                    "20"
                  )}
                </span>
              </div>
              <Button
                label="Update"
                extraStyles={
                  (errors.username || data("username")) &&
                  "cursor-not-allowed opacity-30 dark:opacity-40"
                }
                onClick={handleUsernameUpdate}
              />
            </div>
            <div className="tab:flex tab:items-end tab:justify-around">
              <div className="tab:w-3/5">
                {errors.email && (
                  <span className="text-red text-xs">{errors.email}</span>
                )}
                <span className="flex border-b-2 border-light gap-2 items-center mt-2.5 dark:border-dark">
                  <label htmlFor="email">
                    <SVG id="email" />
                  </label>
                  {form.renderInput(
                    "email",
                    "email",
                    "email",
                    "E-mail address",
                    "email",
                    "40"
                  )}
                </span>
              </div>
              <Button
                label="Update"
                extraStyles={
                  (errors.username || data("email")) &&
                  "cursor-not-allowed opacity-30 dark:opacity-40"
                }
                onClick={handleEmailUpdate}
              />
            </div>
            <div className="tab:flex tab:items-end tab:justify-around">
              <div className="tab:w-3/5">
                {errors.password && (
                  <span className="text-red text-xs">{errors.password}</span>
                )}
                <span className="flex border-b-2 border-light gap-2 items-center mt-2.5 dark:border-dark">
                  <label htmlFor="password">
                    <SVG id="password" />
                  </label>
                  {form.renderInput(
                    "password",
                    "password",
                    "password",
                    "Password",
                    "new-password",
                    "30"
                  )}
                </span>
              </div>
              <Button
                label="Update"
                extraStyles={
                  (errors.username || data("password")) &&
                  "cursor-not-allowed opacity-30 dark:opacity-40"
                }
                onClick={handlePasswordUpdate}
              />
            </div>
          </form>
          <div className="mb-10 mt-60px px-30px tab:px-50px bigTab:px-70px laptop:mt-24 laptop:px-100px">
            <h2 className="font-bold leading-10 text-xl">
              Profile Personal Information - Optional
            </h2>
            <p className="text-sm">Tell us more about yourself.</p>
          </div>
          <form
            onSubmit={handlePersonalData}
            className="border-b grid gap-30px pb-10 px-30px tab:px-70px bigTab:px-24 laptop:pb-60px laptop:px-150px desktop:px-170px"
          >
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <SecondaryInput
                label="Full Name"
                autoComplete="name"
                id="fullname"
                name="fullname"
                type="text"
                placeholder={fullName || "Firstname Lastname"}
                minLength="4"
                maxLength="30"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <DateInput
                label="Date of Birth"
                autoComplete="bday"
                id="date"
                name="date"
                type="text"
                placeholder={dob || "mm/dd/yyyy"}
                min=""
                max=""
                // TODO:
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <SelectOptions
                label="Country"
                id="country"
                autoComplete="country-name"
                option1={{
                  value: "",
                  content: country || "--Please choose an option--",
                }}
                option2={{ value: "United States" }}
                option3={{ value: "United Kingdom" }}
                option4={{ value: "Canada" }}
                option5={{ value: "China" }}
                option6={{ value: "Australia" }}
                option7={{ value: "Argentina" }}
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <SecondaryInput
                label="Street Address"
                autoComplete="street-address"
                id="street"
                name="street"
                type="text"
                placeholder={street || "Enter your street address"}
                minLength="5"
                maxLength="100"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <SecondaryInput
                label="City"
                autoComplete="on"
                id="city"
                name="city"
                type="text"
                placeholder={city || "Enter your city"}
                minLength="3"
                maxLength="30"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <SecondaryInput
                label="State / Province"
                autoComplete="on"
                id="state"
                name="state"
                type="text"
                placeholder={state || "Enter your state / province"}
                minLength="3"
                maxLength="30"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <SecondaryInput
                label="ZIP / Postal Code"
                autoComplete="postal-code"
                id="zipcode"
                name="zipcode"
                type="number"
                placeholder={zipCode || "000000"}
                minLength="4"
                maxLength="15"
              />
            </span>
            <Button label="Save" extraStyles="ml-auto w-fit" />
            {errors.generic && (
              <span className="text-center text-red text-xs">
                {errors.generic}
              </span>
            )}
            {success && (
              <span className="font-bold text-center text-green-600 text-xs">
                {success}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
