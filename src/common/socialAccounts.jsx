import { Link } from "react-router-dom";
import SVG from "./assets/svgs/allSvg";

const SocialAccounts = ({ logos }) => {
  return (
    <div className="flex gap-x-2.5 justify-center text-dark dark:text-white">
      {logos.map(({ id, url }, index) => (
        <Link
          aria-label={id}
          key={index}
          to={url}
          className="border-2 border-transparent bg-[#0f132066] h-logo rounded-full w-logo laptop:h-50 laptop:w-50 dark:border-[#ffffff0d]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SVG id={id} height="100%" width="100%" />
        </Link>
      ))}
    </div>
  );
};

export default SocialAccounts;
