import React from "react";
import UsersHomePage from "./usersHomePage";
import GuestHomePage from "./guestHomePage";

const HomePage = ({ user }) => {
  return user ? <UsersHomePage /> : <GuestHomePage />;
};

export default HomePage;
