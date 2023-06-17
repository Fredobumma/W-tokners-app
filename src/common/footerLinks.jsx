import { Link } from "react-router-dom";
import Switcher from "./switcher";

const FooterLinks = ({ links, checked, toggleMode }) => {
  return (
    <ul className="font-bold gap-x-20 hidden mb-120px laptop:flex laptop:justify-center">
      {links.map(({ path, content }, index) => (
        <>
          <li
            key={index}
            className="active:rotate-3 focus:rotate-3 hover:rotate-3"
          >
            <Link to={path} className="outline-0 underline underline-offset-2">
              {content}
            </Link>
          </li>
          <li>/</li>
        </>
      ))}
      <li>
        <Switcher checked={checked} onChange={toggleMode} />
      </li>
    </ul>
  );
};

export default FooterLinks;
