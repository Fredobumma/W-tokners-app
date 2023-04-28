import React, { useCallback, useContext, useEffect, useState } from "react";
import Joi from "joi-browser";
import jwtDecode from "jwt-decode";
import _ from "lodash";
import { deleteData, getData, setData } from "../../services/httpService";
import {
  getJwt,
  loginWithJwt,
  signIn,
  updateEmail,
  updatePassword,
  updateUser,
} from "../../services/authService";
import ThemeContext from "../../context/themeContext";
import ValidatorContext from "../../context/validatorContext";
import { SVG } from "../svg";
import { DateInput, SecondaryInput } from "../input";
import SelectOptions from "../selectOptions";
import Button from "../button";

const documentName = "users";
const token = getJwt();

const UserProfile = () => {
  const { theme } = useContext(ThemeContext);
  const validator = useContext(ValidatorContext);

  const [login, setlogin] = useState({
    data: { username: "", email: "", password: "" },
    errors: {},
  });
  const [userData, setUserData] = useState({});
  const { email: userEmail } = jwtDecode(token);

  const schema = {
    username: Joi.string().min(4).max(30).required().label("Username"),
    email: Joi.string().email().min(5).max(50).required().label("E-mail"),
    password: Joi.string().min(8).max(40).required().label("Password"),
  };

  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
    const { username } = login.data;
    if (!username || Object.keys(login.errors).length) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updateUser(user, { displayName: username });
      await setData(documentName, userEmail, { username });
      loginWithJwt(user.accessToken);

      login.data.username = "";
      setlogin({ ...login });
    } catch (error) {
      console.log(error.code || "An unknown error occurred");
    }
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    const { email } = login.data;
    if (!email || Object.keys(login.errors).length) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updateEmail(user, email);
      await deleteData(documentName, userEmail);

      userData.email = email;
      await setData(documentName, email, userData);
      loginWithJwt(user.accessToken);

      login.data.email = "";
      setlogin({ ...login });
    } catch (error) {
      console.log(error.code || "An unknown error occurred");
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    const { password: newPassword } = login.data;
    if (!newPassword || Object.keys(login.errors).length) return;

    try {
      const { password } = userData;
      if (!password) throw new Error();

      const { user } = await signIn(userEmail, password);
      await updatePassword(user, newPassword);
      await setData(documentName, userEmail, { password: newPassword });
      loginWithJwt(user.accessToken);

      login.data.password = "";
      setlogin({ ...login });
    } catch (error) {
      console.log(error.code || "An unknown error occurred");
    }
  };

  const handlePersonalData = async (e) => {
    e.preventDefault();

    const prop = [
      "fullName",
      "dob",
      "country",
      "street",
      "city",
      "state",
      "zipCode",
    ];
    const personalInfo = prop.reduce((a, b, i) => {
      return {
        ...a,
        [b]: _.startCase(e.target[i].value) || userData.personalInfo[b],
      };
    }, {});

    try {
      await setData(documentName, userEmail, { personalInfo });

      prop.forEach((_el, i) => (e.target[i].value = ""));
      setUserData({ personalInfo });
    } catch (error) {
      console.log(error.code);
    }
  };

  const getUserData = useCallback(async () => {
    const obj = await getData(documentName, userEmail);
    return obj;
  }, [userEmail]);

  useEffect(() => {
    try {
      const data = async () => {
        const obj = await getUserData();
        if (obj.exists()) setUserData({ ...obj.data() });
      };
      data();
    } catch (error) {
      console.log(error.code);
    }
  }, [getUserData]);

  const form = new validator(login, setlogin, schema);
  const errors = Object.entries(login.errors)
    .filter((el) => !el[1].includes("is not allowed to be empty"))
    .reduce((a, b) => {
      return { ...a, [b[0]]: b[1] };
    }, {});
  const data = (prop) => login.data[prop] === "";

  const { fullName, dob, country, street, city, state, zipCode } =
    userData.personalInfo || {};

  return (
    <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>{" "}
      <h1 className="font-bold text-28 leading-54 mb-10 mx-5 tab:mb-10 tab:mx-10 tab:text-32 bigTab:mx-60px laptop:mb-60px desktop:mb-20 desktop:text-4xl">
        Profile Settings
      </h1>
      <div className="relative max-w-full">
        <div
          className={`relative rounded-all py-60px shadow-lg laptop:py-24 ${
            theme ? "bg-dark text-light" : "bg-white text-dark"
          }`}
        >
          <div className="mb-10 px-30px tab:px-50px bigTab:px-70px laptop:px-100px">
            <h2 className="font-bold leading-10 text-xl">
              Profile Login Information
            </h2>
            <p className="text-sm">Update your login information.</p>
          </div>
          <form className="border-b grid gap-30px pb-10 px-30px tab:pb-60px tab:px-50px bigTab:px-70px laptop:pb-20 laptop:px-100px">
            <div className="tab:flex tab:justify-around">
              {errors["username"] && (
                <span className="text-red text-xs">{errors["username"]}</span>
              )}
              <span
                className={`flex border-b-2 gap-2 items-center tab:w-3/5 ${
                  theme ? "border-light" : "border-dark"
                }`}
              >
                <label htmlFor="username">
                  <SVG id="username" />
                </label>
                {form.renderInput(
                  "username",
                  "username",
                  "text",
                  "Username",
                  "username",
                  "on",
                  "20"
                )}
              </span>
              <Button
                label="Update"
                extraStyles={`active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 mt-3 px-30px py-3.5 transform-gpu transform transition-all duration-300 ${
                  (errors["username"] || data("username")) &&
                  `cursor-not-allowed ${theme ? "opacity-30" : "opacity-40"}`
                }`}
                onClick={handleUsernameUpdate}
              />
            </div>
            <div className="tab:flex tab:justify-around">
              {errors["email"] && (
                <span className="text-red text-xs">{errors["email"]}</span>
              )}
              <span
                className={`flex border-b-2 gap-2 items-center tab:w-3/5 ${
                  theme ? "border-light" : "border-dark"
                }`}
              >
                <label htmlFor="email">
                  <SVG id="email" />
                </label>
                {form.renderInput(
                  "email",
                  "email",
                  "email",
                  "E-mail address",
                  "email",
                  "",
                  "40"
                )}
              </span>
              <Button
                label="Update"
                extraStyles={`active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 mt-3 px-30px py-3.5 transform-gpu transform transition-all duration-300 ${
                  (errors["email"] || data("email")) &&
                  `cursor-not-allowed ${theme ? "opacity-30" : "opacity-40"}`
                }`}
                onClick={handleEmailUpdate}
              />
            </div>
            <div className="tab:flex tab:justify-around">
              {errors["password"] && (
                <span className="text-red text-xs">{errors["password"]}</span>
              )}
              <span
                className={`flex border-b-2 gap-2 items-center tab:w-3/5 ${
                  theme ? "border-light" : "border-dark"
                }`}
              >
                <label htmlFor="password">
                  <SVG id="password" />
                </label>
                {form.renderInput(
                  "password",
                  "password",
                  "password",
                  "Password",
                  "new-password",
                  "",
                  "30"
                )}
              </span>
              <Button
                label="Update"
                extraStyles={`active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 mt-3 px-30px py-3.5 transform-gpu transform transition-all duration-300 ${
                  (errors["password"] || data("password")) &&
                  `cursor-not-allowed ${theme ? "opacity-30" : "opacity-40"}`
                }`}
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
            <Button
              label="Save"
              extraStyles="active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 ml-auto mt-3 px-30px py-3.5 transform-gpu transform transition-all duration-300 w-fit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
