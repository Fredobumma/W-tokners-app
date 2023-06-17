// import ThemeContext from "../../context/themeContext";
import Logo from "../logo";
import FooterLinks from "../footerLinks";
import SocialAccounts from "../socialAccounts";
import Copyright from "./../copyright";

const Footer = ({ checked, toggleMode }) => {
  const links = [
    { path: "/team", content: "OUR TEAM" },
    { path: "/tokens", content: "TOKENS" },
    { path: "/join-whitelist", content: "JOIN WHITELIST" },
  ];

  const logos = [
    { id: "twitter", url: "https://www.twitter.com/fredobumma" },
    { id: "telegram", url: "https://t.me/Fredquinnbee" },
    { id: "instagram", url: "https://www.instagram.com/fredobumma" },
    { id: "medium", url: "https://www.medium.com/@fredobumma" },
    { id: "github", url: "https://github.com/Fredobumma" },
    { id: "reddit", url: "https://www.reddit.com/user/FredObumma" },
  ];

  const date = new Date();
  const year = date.getFullYear();

  return (
    // <ThemeContext>
    <footer className="py-10 relative bigTab:pt-20 bigTab:pb-50px laptop:pt-52 laptop:pb-70px">
      <div className="absolute bg-nav blur-[100px] h-60 inset-0 w-full -z-10 tab:left-1/3 laptop:bg-nav-xl laptop:right-[60%] dark:bg-darkNav dark:laptop:bg-darkNav-xl"></div>
      <FooterLinks links={links} checked={checked} toggleMode={toggleMode} />
      <div className="flex flex-col gap-y-8 justify-between items-center bigTab:gap-y-12 laptop:flex-row">
        <Logo extraClasses="laptop:mb-4" />
        <SocialAccounts logos={logos} />
        <Copyright year={year} />
      </div>
    </footer>
    // </ThemeContext>
  );
};

export default Footer;
