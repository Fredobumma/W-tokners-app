import React, { Fragment } from "react";
import TokensList from "../common/block-components/block-tokensList";
import TrendingTokens from "../common/block-components/block-trendingTokens";
import SavedTokens from "../common/block-components/block-savedTokens";

const Tokens = ({ theme }) => {
  return (
    <Fragment>
      <TokensList />
      <TrendingTokens />
      <SavedTokens />
    </Fragment>
  );
};

export default Tokens;
