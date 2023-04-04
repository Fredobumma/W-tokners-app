import React, { Fragment } from "react";
import UserProfile from "./../common/block-components/block-userProfile";

const Profile = ({ theme }) => {
  return (
    <Fragment>
      <UserProfile theme={theme} />
    </Fragment>
  );
};

export default Profile;
