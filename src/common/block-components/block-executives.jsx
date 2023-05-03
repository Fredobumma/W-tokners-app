import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import TeamCarousel from "../teamCarousel";

const Executives = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className="-mr-5 py-10 relative bigTab:-mr-8 tab:py-60px laptop:-mr-16 laptop:pb-0 laptop:pt-20">
      <div
        className={`absolute blur-[100px] h-full rotate-[15deg] w-full -z-20 tab:left-1/3 laptop:left-[60%] ${
          theme ? "bg-aside" : "bg-darkAside"
        }`}
      ></div>{" "}
      <TeamCarousel theme={theme}>
        <li
          className={`${
            (theme && "bg-lightTeamCard") || "bg-teamCard"
          } h-max min-w-max overflow-hidden pb-0 p-minmax pt-30px rounded-all snap-start`}
        >
          <span className="block font-bold mb-1.5 ml-5 text-left bigTab:ml-0">
            Brad pie
          </span>
          <span className="block mb-50px ml-5 text-left text-sm bigTab:ml-0 bigTab:mb-55px">
            CEO and Co founder
          </span>
          <span className="bg-sprite bg-no-repeat block brad bg-[-272px_-5px] h-385 w-236 tab:bg-[-5px_-5px] tab:h-420 tab:w-257"></span>
        </li>
        <li
          className={`${
            (theme && "bg-lightTeamCard") || "bg-teamCard"
          } h-max min-w-max overflow-hidden pb-0 p-minmax pt-30px relative rounded-all snap-start`}
        >
          <span className="block font-bold mb-1.5 ml-5 text-left bigTab:ml-0">
            Lee Lee
          </span>
          <span className="block mb-50px ml-5 text-left text-sm bigTab:ml-0 bigTab:mb-55px">
            CTO and Co founder
          </span>
          <span className="bg-sprite bg-no-repeat block lee bg-[-2861px_-5px] h-385 relative w-236 z-20 tab:bg-[-2594px_-5px] tab:h-420 tab:w-257"></span>
          <span className="bg-sprite bg-no-repeat block team-bg absolute bg-[-350px_-2183px] inset-0 max-h-full max-w-full z-10 bigTab:top-[5px]"></span>
        </li>
        <li
          className={`${
            (theme && "bg-lightTeamCard") || "bg-teamCard"
          } h-max min-w-max overflow-hidden pb-0 p-minmax pt-30px rounded-all snap-start`}
        >
          <span className="block font-bold mb-1.5 ml-5 text-left bigTab:ml-0">
            Shan khan
          </span>
          <span className="block mb-50px ml-5 text-left text-sm bigTab:ml-0 bigTab:mb-55px">
            Head of Development
          </span>
          <span className="bg-sprite bg-no-repeat block shan bg-[-4047px_-815px] h-385 w-236 tab:bg-[-3780px_-815px] tab:h-420 tab:w-257"></span>
        </li>
        <li
          className={`${
            (theme && "bg-lightTeamCard") || "bg-teamCard"
          } h-max min-w-max overflow-hidden pb-0 p-minmax pt-30px relative rounded-all snap-start`}
        >
          <span className="block font-bold mb-1.5 ml-5 text-left bigTab:ml-0">
            Shan Lopez
          </span>
          <span className="block mb-50px ml-5 text-left text-sm bigTab:ml-0 bigTab:mb-55px">
            Head of marketing
          </span>
          <span className="bg-sprite bg-no-repeat block lopez bg-[-272px_-400px] h-385 relative w-236 z-20 tab:bg-[-3128px_-400px] tab:h-420 tab:w-257"></span>
          <span className="bg-sprite bg-no-repeat block team-bg absolute bg-[-350px_-2183px] inset-0 max-h-full max-w-full z-10 bigTab:top-[5px]"></span>
        </li>
        <li
          className={`${
            (theme && "bg-lightTeamCard") || "bg-teamCard"
          } h-max min-w-max overflow-hidden pb-0 p-minmax pt-30px rounded-all snap-start`}
        >
          <span className="block font-bold mb-1.5 ml-5 text-left bigTab:ml-0">
            Stephanie O.B
          </span>
          <span className="block mb-50px ml-5 text-left text-sm bigTab:ml-0 bigTab:mb-55px">
            HR manager
          </span>
          <span className="bg-sprite bg-no-repeat block stephanie bg-[-4157px_-1210px] h-385 w-236 tab:bg-[-4157px_-1605px] tab:h-420 tab:w-257"></span>
        </li>
        <li
          className={`${
            (theme && "bg-lightTeamCard") || "bg-teamCard"
          } h-max min-w-max overflow-hidden pb-0 p-minmax pt-30px relative rounded-all snap-start`}
        >
          <span className="block font-bold mb-1.5 ml-5 text-left bigTab:ml-0">
            Lily
          </span>
          <span className="block mb-50px ml-5 text-left text-sm bigTab:ml-0 bigTab:mb-55px">
            Community manager
          </span>
          <span className="brightness-90 contrast-150 grayscale bg-sprite bg-no-repeat block lily bg-[-3107px_-5px] h-385 relative w-236 z-20 tab:bg-[-2861px_-400px] tab:h-420 tab:w-257"></span>
          <span className="bg-sprite bg-no-repeat block team-bg absolute bg-[-350px_-2183px] inset-0 max-h-full max-w-full z-10 bigTab:top-[5px]"></span>
        </li>
      </TeamCarousel>
    </section>
  );
};

export default Executives;
