import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import ThemeContext from "../../context/themeContext";
// import MenuContext from "../../context/menuContext";
import AuthContext from "../../context/authContext";
import Switcher from "../switcher";
import { SVG } from "../svg";
import { NavButton } from "./../button";

const Navbar = ({ checked, menu, toggleMenu, toggleMode }) => {
  const user = useContext(AuthContext);

  const menuIcon = ["rotate-[42deg]", "hidden", "-rotate-[42deg]"];

  const links = [
    { path: "/team", content: "Our team" },
    { path: "/tokens", content: "Tokens" },
    { path: "/join-whitelist", content: "Join Whitelist" },
  ];

  const navButton = [
    {
      path: "/profile",
      label: user?.name,
      isAuth: true,
      classes:
        "flex active:bg-transparent capitalize focus:bg-transparent focus:text-current font-bold gap-2.5 hover:bg-transparent hover:text-current items-center justify-center py-3 text-sm laptop:px-2.5 desktop:px-0",
      content: <SVG id="profile" />,
    },
    { path: "/logging-out", label: "Log Out", isAuth: true },
    {
      path: "/login",
      label: "Sign In",
      classes: "focus:px-10 hover:px-10 py-3 laptop:px-2.5 desktop:px-0",
    },
    { path: "/register", label: "Sign Up" },
  ];

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
    // <ThemeContext>
    // <MenuContext>
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
              {menuIcon.map((icon, index) => (
                <div
                  key={index}
                  className={`bg-dark h-[2px] w-7 transform transition-all duration-300 dark:bg-white ${
                    icon !== "hidden" && "origin-left"
                  } ${menu && icon}`}
                ></div>
              ))}
            </div>
          </div>
        </button>
        <div
          className={`absolute bg-light h-[101vh] inset-0 left-[30vw] pr-5 -mt-2.5 pt-[16vh] text-center transform transition-all duration-300 w-[70vw] z-[90] laptop:bg-transparent laptop:flex laptop:h-auto laptop:items-center laptop:justify-between laptop:ml-50px laptop:mt-3.5 laptop:p-0 laptop:static laptop:text-justify laptop:w-full desktop:ml-20 dark:bg-dark dark:laptop:bg-transparent ${
            !menu && "left-[200vw]"
          }`}
        >
          <ul className="flex flex-col font-bold gap-10 text-sm laptop:flex-row laptop:gap-30px laptop:inline-flex">
            {links.map(({ path, content }, index) => (
              <li key={index}>
                <NavLink
                  to={path}
                  className="outline-0 group overflow-hidden relative"
                >
                  {content}
                  <span className="absolute bg-secondary h-0.5 inset-0 top-[110%] transition-all duration-300 ease-out w-0 group-active:w-full group-focus:w-full group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
            <li>
              <span className="inline-block laptop:ml-3">
                <Switcher checked={checked} onChange={toggleMode} />
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-2.5 items-center mt-70px mx-auto w-fit laptop:flex-row laptop:gap-2.5 laptop:m-0 laptop:-mt-[5px] desktop:gap-30px">
            {navButton
              .filter((el) => (user ? el.isAuth : !el.isAuth))
              .map(({ path, label, classes, content }, index) => (
                <NavButton
                  key={index}
                  to={path}
                  label={label}
                  extraStyles={
                    classes || "border-2 border-secondary px-10 py-3"
                  }
                >
                  {content}
                </NavButton>
              ))}
          </div>
        </div>
      </div>
    </nav>
    // </MenuContext>
    // </ThemeContext>
  );
};

export default Navbar;
