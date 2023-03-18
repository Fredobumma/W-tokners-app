import { DarkModeSwitch } from "react-toggle-dark-mode";

function Switcher({ ...rest }) {
  return (
    <>
      <DarkModeSwitch size={24} fill="#0F1320" moonColor="dark" {...rest} />
    </>
  );
}

export default Switcher;
