import { lazy, useContext } from "react";
import AuthContext from "../context/authContext";

const UsersHomePage = lazy(() => import("./usersHomePage"));
const GuestHomePage = lazy(() => import("./guestHomePage"));

const HomePage = () => {
	const user = useContext(AuthContext);

	return user ? <UsersHomePage /> : <GuestHomePage />;
};

export default HomePage;
