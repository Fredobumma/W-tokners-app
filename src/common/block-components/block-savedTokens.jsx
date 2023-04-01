import React from "react";
import { SVG } from "../svg";

const SavedTokens = () => {
  return (
    <section className="py-10 laptop:py-20">
      <div className="mt-70 text-right">
        <button className="cursor-pointer mr-2 hover:scale-110 laptop:mr-0">
          <SVG id="reset" />
        </button>
      </div>
      <div className="border-t mt-5 overflow-x-auto pb-5 pt-5 rounded-all scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all shadow-xl">
        <h1 className="font-bold leading-6 px-5 py-170 text-center text-lg desktop:text-32 desktop:leading-10">
          There's no data to display!
        </h1>
      </div>
    </section>
  );
};

export default SavedTokens;
