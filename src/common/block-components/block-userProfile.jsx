import React, { useContext, useState } from "react";
import Joi from "joi-browser";
import jwtDecode from "jwt-decode";
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
import { mapToState } from "./../../utilities/mapObject";
import { SVG } from "../svg";
import { DateInput, SecondaryInput } from "../input";
import SelectOptions from "../selectOptions";
import Button from "../button";

const documentName = "users";
const token = getJwt();

const UserProfile = () => {
  const { theme } = useContext(ThemeContext);
  const validator = useContext(ValidatorContext);

  const [state, setState] = useState({
    data: { username: "", email: "", password: "" },
    errors: {},
  });
  const { email: userEmail } = jwtDecode(token);

  const schema = {
    username: Joi.string().min(4).max(30).required().label("Username"),
    email: Joi.string().email().min(5).max(50).required().label("E-mail"),
    password: Joi.string()
      .regex(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(8)
      .max(40)
      .required()
      .label("Password"),
  };

  const form = new validator(state, setState, schema);

  const handleUsernameUpdate = async (e) => {
    e.preventDefault();
    const { username } = state.data;
    if (!username || Object.keys(state.errors).length) return;

    try {
      const { password } = await getDataObj();
      const { user } = await signIn(userEmail, password.stringValue);

      await updateUser(user, { displayName: username });
      await setData(documentName, userEmail, { username });
      loginWithJwt(user.accessToken);

      e.target.form[0].value = "";
      state.data.username = "";
      setState(state);
    } catch (error) {
      console.log(error.code || "An unknown error occurred");
    }
  };

  const handleEmailUpdate = async (e) => {
    e.preventDefault();
    const { email } = state.data;
    if (!email || Object.keys(state.errors).length) return;

    try {
      const obj = await getDataObj();
      const { password } = obj;
      const { user } = await signIn(userEmail, password.stringValue);

      await updateEmail(user, email);
      await deleteData(documentName, userEmail);

      obj.email.stringValue = email;
      await setData(documentName, email, mapToState(obj));
      loginWithJwt(user.accessToken);

      e.target.form[2].value = "";
      state.data.email = "";
      setState(state);
    } catch (error) {
      console.log(error.code || "An unknown error occurred");
    }
  };

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    const { password: newPassword } = state.data;
    if (!newPassword || Object.keys(state.errors).length) return;

    try {
      const { password } = await getDataObj();
      const { user } = await signIn(userEmail, password.stringValue);

      await updatePassword(user, newPassword);
      await setData(documentName, userEmail, { password: newPassword });
      loginWithJwt(user.accessToken);

      e.target.form[4].value = "";
      state.data.password = "";
      setState(state);
    } catch (error) {
      console.log(error.code || "An unknown error occurred");
    }
  };

  const getDataObj = async () => {
    try {
      const {
        _document: {
          data: {
            value: {
              mapValue: { fields },
            },
          },
        },
      } = await getData(documentName, userEmail);
      return fields;
    } catch (error) {
      return error.code;
    }
  };

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
                extraStyles="active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 mt-3 px-30px py-3.5 transform-gpu transform transition-all duration-300"
                onClick={handleUsernameUpdate}
              />
            </div>
            <div className="tab:flex tab:justify-around">
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
                extraStyles="active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 mt-3 px-30px py-3.5 transform-gpu transform transition-all duration-300"
                onClick={handleEmailUpdate}
              />
            </div>
            <div className="tab:flex tab:justify-around">
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
                extraStyles="active:scale-105 bg-secondary drop-shadow-button focus:scale-105 hover:scale-105 mt-3 px-30px py-3.5 transform-gpu transform transition-all duration-300"
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
          <form className="border-b grid gap-30px pb-10 px-30px tab:px-70px bigTab:px-24 laptop:pb-60px laptop:px-150px desktop:px-170px">
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <SecondaryInput
                label="Full Name"
                autoComplete="name"
                id="fullname"
                name="fullname"
                type="text"
                placeholder="Firstname Lastname"
                minLength="3"
                maxLength="30"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <DateInput
                label="Date of Birth"
                autoComplete="bday"
                id="date"
                name="date"
                type="date"
                placeholder="Date of Birth"
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
                option1={{ value: "", content: "--Please choose an option--" }}
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
                placeholder="Enter your street address"
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
                placeholder="Enter your city"
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
                placeholder="Enter your state / province"
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
                placeholder="000000"
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
