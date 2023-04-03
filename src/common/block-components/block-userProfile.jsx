import React from "react";
import { SVG } from "../svg";
import Button from "../button";

const UserProfile = ({ theme }) => {
  return (
    <section className="py-10 laptop:py-20">
      <h1 className="font-bold text-28 leading-54 mb-10 mx-5 tab:mb-10 tab:mx-10 tab:text-32 bigTab:mx-60 laptop:mb-60 desktop:mb-20 desktop:text-4xl">
        Profile Settings
      </h1>
      <div className="relative max-w-full">
        <div
          className={`relative rounded-all py-60 shadow-lg laptop:py-24 ${
            theme ? "bg-dark text-light" : "bg-white text-dark"
          }`}
        >
          <div className="mb-10 px-30 tab:px-50 bigTab:px-70 laptop:px-100">
            <h2 className="font-bold leading-10 text-xl">
              Profile Login Information
            </h2>
            <p className="text-sm">Update your login information.</p>
          </div>
          <form className="border-b grid gap-30 pb-10 px-30 tab:pb-60 tab:px-50 bigTab:px-70 laptop:pb-20 laptop:px-100">
            <div className="tab:flex tab:justify-around">
              <span
                className={`flex border-b-2 gap-3 items-center tab:w-3/5 ${
                  theme ? "border-light" : "border-dark"
                }`}
              >
                <label htmlFor="username">
                  <SVG id="username" />
                </label>
                <input
                  autoFocus
                  autoComplete="off"
                  id="username"
                  name="username"
                  type="text"
                  className={`font-bold bg-transparent h-10 w-full placeholder:font-normal focus:outline-none ${
                    theme ? "text-light" : "text-dark placeholder:text-gray-500"
                  }`}
                  placeholder="Username"
                />
              </span>
              <Button
                label="Update"
                extraStyles="active:altButton bg-secondary focus:bg-altButton hover:bg-altButton mt-3 px-30 py-3.5"
              />
            </div>
            <div className="tab:flex tab:justify-around">
              <span
                className={`flex border-b-2 gap-3 items-center tab:w-3/5 ${
                  theme ? "border-light" : "border-dark"
                }`}
              >
                <label htmlFor="email">
                  <SVG id="email" />
                </label>
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="email"
                  className={`font-bold bg-transparent h-10 w-full placeholder:font-normal focus:outline-none ${
                    theme ? "text-light" : "text-dark placeholder:text-gray-500"
                  }`}
                  placeholder="Email address"
                />
              </span>
              <Button
                label="Update"
                extraStyles="active:altButton bg-secondary focus:bg-altButton hover:bg-altButton mt-3 px-30 py-3.5"
              />
            </div>
            <div className="tab:flex tab:justify-around">
              <span
                className={`flex border-b-2 gap-3 items-center tab:w-3/5 ${
                  theme ? "border-light" : "border-dark"
                }`}
              >
                <label htmlFor="password">
                  <SVG id="password" />
                </label>
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  className={`font-bold bg-transparent h-10 w-full placeholder:font-normal focus:outline-none ${
                    theme ? "text-light" : "text-dark placeholder:text-gray-500"
                  }`}
                  placeholder="Password"
                />
              </span>
              <Button
                label="Update"
                extraStyles="active:altButton bg-secondary focus:bg-altButton hover:bg-altButton mt-3 px-30 py-3.5"
              />
            </div>
          </form>
          <div className="mb-10 mt-60 px-30 tab:px-50 bigTab:px-70 laptop:mt-24 laptop:px-100">
            <h2 className="font-bold leading-10 text-xl">
              Profile Personal Information - Optional
            </h2>
            <p className="text-sm">Tell us more about yourself.</p>
          </div>
          <form className="border-b grid gap-30 pb-10 px-30 tab:px-70 bigTab:px-24 laptop:pb-60 laptop:px-150 desktop:px-170">
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <label htmlFor="fullname">Full Name</label>
              <input
                autoComplete="off"
                id="fullname"
                name="fullname"
                type="text"
                className={`border-b-2 font-bold bg-transparent h-10 px-2 text-sm placeholder:font-normal focus:outline-none tab:w-3/4 ${
                  theme
                    ? "border-light text-light"
                    : "border-dark text-dark placeholder:text-gray-500"
                }`}
                placeholder="Firstname Lastname"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <label htmlFor="date">Date of Birth</label>
              <input
                autoComplete="off"
                id="date"
                name="date"
                type="date"
                className={`border-b-2 bg-white h-10 px-2 text-dark text-sm w-full focus:outline-none tab:w-3/4 ${
                  theme ? "border-light" : "border-dark"
                }`}
                placeholder="Date of Birth"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <label htmlFor="date">Country</label>
              <select
                className={`border-b-2 bg-transparent h-10 px-2 text-sm w-full focus:outline-0 tab:w-3/4 ${
                  theme ? "border-light" : "border-dark"
                }`}
                name="pets"
                id="pet-select"
              >
                <option className="text-dark" value="">
                  --Please choose an option--
                </option>
                <option className="text-dark" value="dog">
                  United States
                </option>
                <option className="text-dark" value="cat">
                  United Kingdom
                </option>
                <option className="text-dark" value="hamster">
                  Canada
                </option>
                <option className="text-dark" value="parrot">
                  China
                </option>
                <option className="text-dark" value="spider">
                  Australia
                </option>
                <option className="text-dark" value="goldfish">
                  Argentina
                </option>
              </select>
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <label htmlFor="street">Street Address</label>
              <input
                autoComplete="off"
                id="street"
                name="street"
                type="text"
                className={`border-b-2 font-bold bg-transparent h-10 px-2 text-sm placeholder:font-normal focus:outline-none tab:w-3/4 ${
                  theme
                    ? "border-light text-light"
                    : "border-dark text-dark placeholder:text-gray-500"
                }`}
                placeholder="Enter your street address"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <label htmlFor="city">City</label>
              <input
                autoComplete="off"
                id="city"
                name="city"
                type="text"
                className={`border-b-2 font-bold bg-transparent h-10 px-2 text-sm placeholder:font-normal focus:outline-none tab:w-3/4 ${
                  theme
                    ? "border-light text-light"
                    : "border-dark text-dark placeholder:text-gray-500"
                }`}
                placeholder="Enter your city"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <label htmlFor="state">State / Province</label>
              <input
                autoComplete="off"
                id="state"
                name="state"
                type="text"
                className={`border-b-2 font-bold bg-transparent h-10 px-2 text-sm placeholder:font-normal focus:outline-none tab:w-3/4 ${
                  theme
                    ? "border-light text-light"
                    : "border-dark text-dark placeholder:text-gray-500"
                }`}
                placeholder="Enter your state / province"
              />
            </span>
            <span className="flex flex-col tab:flex-row tab:items-center tab:justify-between">
              <label htmlFor="zipcode">ZIP / Postal Code</label>
              <input
                autoComplete="off"
                id="zipcode"
                name="zipcode"
                type="text"
                className={`border-b-2 font-bold bg-transparent h-10 px-2 text-sm placeholder:font-normal focus:outline-none tab:w-3/4 ${
                  theme
                    ? "border-light text-light"
                    : "border-dark text-dark placeholder:text-gray-500"
                }`}
                placeholder="000000"
              />
            </span>
            <Button
              label="Save"
              extraStyles="active:altButton bg-secondary focus:bg-altButton hover:bg-altButton ml-auto mt-3 px-30 py-3.5 w-fit"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
