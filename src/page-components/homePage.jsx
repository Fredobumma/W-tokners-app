import { useContext } from "react";
import AuthContext from "../context/authContext";
import UsersHomePage from "./usersHomePage";
import GuestHomePage from "./guestHomePage";

const HomePage = () => {
  const { user } = useContext(AuthContext);

  return user ? <UsersHomePage /> : <GuestHomePage />;
};

export default HomePage;
