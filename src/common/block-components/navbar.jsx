import { lazy, useContext } from "react";
import AuthContext from "../../context/authContext";
import MenuButton from "./../menuButton";
import MenuLinks from "../menuLinks";

const Logo = lazy(() => import("../logo"));
const SVG = lazy(async () => ({ default: (await import("../svg")).SVG }));

const Navbar = ({ checked, menu, toggleMenu, toggleMode }) => {
  const user = useContext(AuthContext);

  // === Harmburger-Menu Encapsulated Data
  const menuIcon = ["rotate-[42deg]", "hidden", "-rotate-[42deg]"];

  //  === Navlinks Encapsulated Data
  const links = [
    { path: "/team", content: "Our team" },
    { path: "/tokens", content: "Tokens" },
    { path: "/join-whitelist", content: "Join Whitelist" },
    { path: "/recover-password", content: "Recover Password", isAuth: true },
  ];

  // === Navbuttons Encapsulated Data
  const navButtons = [
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

  return (
    <nav className="bg-light fixed inset-x-0 max-w-1600 pb-5 px-5 w-full z-[80] tab:px-30px laptop:mx-auto dark:bg-dark">
      <div className="relative flex items-center justify-between pt-5 laptop:justify-start laptop:pt-2.5 laptop:static">
        <div className="absolute bg-nav blur-[100px] h-86 inset-0 w-full -z-10 tab:left-1/3 laptop:bg-nav-xl laptop:left-[60%] dark:bg-darkNav dark:laptop:bg-darkNav-xl"></div>
        <Logo extraClasses="outline-0 mr-30px laptop:m-0" />
        <MenuButton menu={menu} icon={menuIcon} toggleMenu={toggleMenu} />
        <div
          className={`absolute bg-light h-[101vh] inset-0 left-[30vw] pr-5 -mt-2.5 pt-[16vh] text-center transform transition-all w-[70vw] z-[90] laptop:bg-transparent laptop:flex laptop:h-auto laptop:items-center laptop:justify-between laptop:ml-50px laptop:mt-3.5 laptop:p-0 laptop:static laptop:text-justify laptop:w-full desktop:ml-20 dark:bg-dark dark:laptop:bg-transparent ${
            !menu && "left-[200vw]"
          }`}
          onClick={toggleMenu}
        >
          <MenuLinks
            links={links}
            buttons={navButtons}
            checked={checked}
            toggleMode={toggleMode}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
