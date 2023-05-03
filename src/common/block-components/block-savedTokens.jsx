import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { SVG } from "../svg";

const SavedTokens = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>{" "}
      <div className="mt-70px text-right">
        <button className="cursor-pointer mr-2 hover:scale-110 laptop:mr-0 transform-gpu transform transition-all duration-300">
          <SVG id="reset" />
        </button>
      </div>
      <div className="border-t mt-5 overflow-x-auto pb-5 pt-5 rounded-all scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-all shadow-xl">
        <h1 className="font-bold leading-6 px-5 py-170px text-center text-lg desktop:text-32 desktop:leading-10">
          There's no data to display!
        </h1>
      </div>
    </section>
  );
};

export default SavedTokens;
