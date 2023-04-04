import React from "react";
import { SVG } from "../svg";
import Button from "./../button";

const WhitelistForm = ({ theme }) => {
  return (
    <section className="py-10 laptop:py-20">
      <div className="flex flex-col gap-10 max-w-512 mx-auto tab:max-w-640 bigTab:gap-50 bigTab:max-w-700 laptop:gap-0 laptop:max-w-1024">
        <div
          className={`px-8 py-12 rounded-all self-end text-center w-full z-10 laptop:mr-10 laptop:-mt-120 laptop:order-2 laptop:w-5/12 desktop:mr-50 ${
            theme ? "bg-lightGuideCard" : "bg-guideCard"
          }`}
        >
          <span className="inline-block mx-auto">
            <SVG id="namedLogo" />
          </span>
          <p className="font-bold text-sm leading-4 mb-60 mt-5 bigTab:text-base bigTab:leading-5 desktop:text-xl desktop:leading-7">
            Enter your email to join the whitelist. Don't be late!
          </p>
          {/* TODO: for popup notification ==== "A confirmation email would be sent to your email if you're successfully enlisted" */}
          <p className="decoration-inherit font-bold text-xs leading-5 underline underline-offset-4 bigTab:leading-5 desktop:leading-54 desktop:text-sm">
            Go back ?
          </p>
          <Button
            label="Back"
            extraStyles="active:bg-secondary bg-transparent border-2 border-secondary focus:bg-secondary hover:bg-secondary mt-5 px-10 py-3"
          />
        </div>
        <div className="relative max-w-full">
          <div className="absolute animate-switch-gradient bg-400% inset-0 bg-form mx-30 -rotate-2 rounded-all shadow-lg -skew-y-[5deg] tab:mx-10 bigTab:mx-50 bigTab:-skew-y-[4deg] laptop:mx-16 laptop:-skew-y-2"></div>
          <div
            className={`relative rounded-all py-60 shadow-lg tab:py-20 bigTab:py-24 laptop:py-120 ${
              theme ? "bg-dark" : "bg-white"
            }`}
          >
            <form className="grid gap-30 px-30 tab:px-50 bigTab:px-70 laptop:px-100">
              <span
                className={`flex border-b-2 gap-3 items-center ${
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
              <div>
                <Button
                  label="Submit"
                  extraStyles="active:altButton bg-secondary focus:bg-altButton hover:bg-altButton mt-3 px-30 py-3.5"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitelistForm;
