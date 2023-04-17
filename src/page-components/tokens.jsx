import React, { Fragment } from "react";
import TokensList from "../common/block-components/block-tokensList";
// import SavedTokens from "../common/block-components/block-savedTokens";
// import TokenDetails from "./../common/block-components/block-token-details";

const Tokens = () => {
  return (
    <Fragment>
      <TokensList />
      {/* <SavedTokens /> */}
      {/* <TokenDetails theme={theme} /> */}
    </Fragment>
  );
};

export default Tokens;
