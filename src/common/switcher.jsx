import { DarkModeSwitch } from "react-toggle-dark-mode";

function Switcher({ ...rest }) {
  return (
    <>
      <DarkModeSwitch size={24} sunColor="dark" {...rest} />
    </>
  );
}

export default Switcher;
