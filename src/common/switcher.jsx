import { DarkModeSwitch } from "react-toggle-dark-mode";

function Switcher({ ...rest }) {
  return (
    <>
      <DarkModeSwitch
        size={20}
        fill="#0F1320"
        moonColor="dark"
        sunColor="white"
        {...rest}
      />
    </>
  );
}

export default Switcher;
