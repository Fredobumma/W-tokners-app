import { useContext } from "react";
// import ThemeContext from "../../context/themeContext";
// import MenuContext from "../../context/menuContext";
import AuthContext from "../../context/authContext";
import Logo from "../logo";
import { SVG } from "../svg";
import MenuButton from "./../menuButton";
import MenuLinks from "../menuLinks";

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

  // const a = function person() {
  //   console.log("Fuja");
  // };

  // const person = {
  //   0: "me",
  //   1: "you",
  // };

  // for loop ======
  // for in loop
  // for of loop
  // forEach loop
  // while loop
  // do while loop

  // let number = 2;
  // while (number === 2) {
  //   console.log(person[number]);
  //   number++;
  // }

  // person[number] === person[2]

  return (
    // <ThemeContext>
    // <MenuContext>
    <nav className="bg-light fixed inset-x-0 max-w-1600 pb-5 px-5 w-full z-[80] tab:px-30px laptop:mx-auto dark:bg-dark">
      <div className="relative flex items-center justify-between pt-5 laptop:justify-start laptop:pt-2.5 laptop:static">
        <div className="absolute bg-nav blur-[100px] h-86 inset-0 w-full -z-10 tab:left-1/3 laptop:bg-nav-xl laptop:left-[60%] dark:bg-darkNav dark:laptop:bg-darkNav-xl"></div>
        <Logo extraClasses="outline-0 mr-30px laptop:m-0" />
        <MenuButton menu={menu} icon={menuIcon} toggleMenu={toggleMenu} />
        <div
          className={`absolute bg-light h-[101vh] inset-0 left-[30vw] pr-5 -mt-2.5 pt-[16vh] text-center transform transition-all duration-300 w-[70vw] z-[90] laptop:bg-transparent laptop:flex laptop:h-auto laptop:items-center laptop:justify-between laptop:ml-50px laptop:mt-3.5 laptop:p-0 laptop:static laptop:text-justify laptop:w-full desktop:ml-20 dark:bg-dark dark:laptop:bg-transparent ${
            !menu && "left-[200vw]"
          }`}
        >
          <MenuLinks
            links={links}
            button={navButton}
            checked={checked}
            toggleMode={toggleMode}
          />
        </div>
      </div>
    </nav>
    // </MenuContext>
    // </ThemeContext>
  );
};

export default Navbar;
