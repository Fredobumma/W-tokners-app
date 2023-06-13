import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../context/themeContext";
import MenuContext from "../../context/menuContext";
import AuthContext from "../../context/authContext";
import Switcher from "../switcher";
import { SVG } from "../svg";
import { NavButton } from "./../button";

const Navbar = () => {
  const user = useContext(AuthContext);
  const { checked, toggleMode } = useContext(ThemeContext);
  const { menu, toggleMenu } = useContext(MenuContext);

  // array   --------
  // object   ------- const person = {name: "Fuja", age: 25}
  // function  ------ function person() {}
  // string    ----- "Fuja" or 'Fuja' or `Fuja`
  // boolean   ------ true or false
  // Number   ------- 1,2,3,4,5,6,7,8,9,0 ("1", "2", "3", "4", "5")
  // null   ----- null
  // undefined   ---- undefined

  // const person = {
  //   name: "Fuja",
  //   age: 25,
  //   addy: function person() {
  //     console.log("Fuja");
  //   },
  // };
  // const a = function person() {
  //   console.log("Fuja");
  // };
  // const array = [];

  return (
    <nav className="bg-light fixed inset-x-0 max-w-1600 pb-5 px-5 w-full z-[80] tab:px-30px laptop:mx-auto dark:bg-dark">
      <div className="relative flex items-center justify-between pt-5 laptop:justify-start laptop:pt-2.5 laptop:static">
        <div className="absolute bg-nav blur-[100px] h-86 inset-0 w-full -z-10 tab:left-1/3 laptop:bg-nav-xl laptop:left-[60%] dark:bg-darkNav dark:laptop:bg-darkNav-xl"></div>
        <NavLink
          to="/"
          className="outline-0 max-h-[33px] max-w-[207px] mr-30px laptop:m-0"
        >
          <SVG id="namedLogo" height="100%" width="100%" />
        </NavLink>
        <button className="group z-[100] laptop:hidden" onClick={toggleMenu}>
          <div className="p-2.5 rounded-full w-fit h-fit transform transition-all bg-trasnparent ring-0 ring-gray-400 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={`bg-dark h-[2px] w-7 transform transition-all duration-300 origin-left dark:bg-white ${
                  menu && "rotate-[42deg]"
                }`}
              ></div>
              <div
                className={`bg-dark h-[2px] w-7 transform transition-all duration-300 dark:bg-white ${
                  menu && "hidden"
                }`}
              ></div>
              <div
                className={`bg-dark h-[2px] w-7 transform transition-all duration-300 origin-left dark:bg-white ${
                  menu && "-rotate-[42deg]"
                }`}
              ></div>
            </div>
          </div>
        </button>
        <div
          className={`absolute h-[101vh] inset-0 left-[30vw] pr-5 -mt-2.5 pt-[16vh] text-center transform transition-all duration-300 w-[70vw] z-[90] laptop:bg-transparent laptop:flex laptop:h-auto laptop:items-center laptop:justify-between laptop:ml-50px laptop:mt-3.5 laptop:p-0 laptop:static laptop:text-justify laptop:w-full desktop:ml-20 ${
            !menu && "left-[200vw]"
          }`}
        >
          <ul className="flex flex-col font-bold gap-10 text-sm laptop:flex-row laptop:gap-30px laptop:inline-flex">
            <li>
              <NavLink
                to="/team"
                className="outline-0 group overflow-hidden relative"
              >
                Our team
                <span className="absolute bg-secondary h-0.5 inset-0 top-[110%] transition-all duration-300 ease-out w-0 group-active:w-full group-focus:w-full group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tokens"
                className="outline-0 group overflow-hidden relative"
              >
                Tokens
                <span className="absolute bg-secondary h-0.5 inset-0 top-[110%] transition-all duration-300 ease-out w-0 group-active:w-full group-focus:w-full group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/join-whitelist"
                className="outline-0 group overflow-hidden relative"
              >
                Join Whitelist
                <span className="absolute bg-secondary h-0.5 inset-0 top-[110%] transition-all duration-300 ease-out w-0 group-active:w-full group-focus:w-full group-hover:w-full"></span>
              </NavLink>
            </li>
            <li>
              <span className="inline-block laptop:ml-3">
                <Switcher checked={checked} onChange={toggleMode} />
              </span>
            </li>
          </ul>
          {user ? (
            <div className="flex flex-col w-fit gap-2.5 mt-70px mx-auto laptop:flex-row laptop:gap-2.5 laptop:m-0 laptop:-mt-[5px] desktop:gap-30px">
              <NavButton
                to="/profile"
                extraStyles="flex active:bg-transparent capitalize focus:bg-transparent focus:text-current font-bold gap-2.5 hover:bg-transparent hover:text-current items-center justify-center py-3 text-sm laptop:px-2.5 desktop:px-0"
              >
                {user.name}
                <SVG id="profile" />
              </NavButton>
              <NavButton
                to="/logging-out"
                label="Log Out"
                extraStyles="border-2 border-secondary px-10 py-3"
              />
            </div>
          ) : (
            <div className="flex flex-col w-fit gap-2.5 mt-70px mx-auto laptop:flex-row laptop:gap-2.5 laptop:m-0 laptop:-mt-[5px] desktop:gap-30px">
              <NavButton
                to="/login"
                label="Sign In"
                extraStyles="focus:px-10 hover:px-10 py-3 laptop:px-2.5 desktop:px-0"
              />
              <NavButton
                to="/register"
                label="Sign Up"
                extraStyles="border-2 border-secondary px-10 py-3"
              />
              {/* {arr.map((item, index) => (
                <NavButton
                  key={index}
                  to={item}
                  label="Sign In"
                  // extraStyles="py-3 focus:px-10 hover:px-10 laptop:px-2.5 desktop:px-0"
                />
              ))} */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
