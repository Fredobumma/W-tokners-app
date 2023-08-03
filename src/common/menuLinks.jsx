import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "./../context/authContext";
import Switcher from "./switcher";
import { NavButton } from "./button";

const MenuLinks = ({ links, buttons, checked, toggleMode }) => {
  const user = useContext(AuthContext);

  return (
    <>
      <ul className="flex flex-col font-bold gap-10 text-sm laptop:flex-row laptop:gap-4 laptop:inline-flex desktop:gap-30px">
        {links
          .filter((el) => (user ? !el.isAuth : el))
          .map(({ path, content }, index) => (
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
        {buttons
          .filter((el) => (user ? el.isAuth : !el.isAuth))
          .map(({ path, label, classes, content }, index) => (
            <NavButton
              key={index}
              to={path}
              label={label || user?.name}
              extraStyles={classes || "border-2 border-secondary px-10 py-3"}
            >
              {content}
            </NavButton>
          ))}
      </div>
    </>
  );
};

export default MenuLinks;
