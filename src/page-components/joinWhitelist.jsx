import RequireAuth from "../common/auth";
import WhitelistForm from "../common/block-components/block-whitelistForm";

const JoinWhitelist = () => {
  return (
    <RequireAuth>
      <WhitelistForm />
    </RequireAuth>
  );
};

export default JoinWhitelist;
