import RequireAuth from "../common/auth";
import UserProfile from "./../common/block-components/block-userProfile";

const Profile = () => {
  return (
    <RequireAuth>
      <UserProfile />
    </RequireAuth>
  );
};

export default Profile;
