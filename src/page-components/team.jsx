import { Fragment, lazy } from "react";

const Executives = lazy(() =>
  import("./../common/block-components/block-executives")
);

const Team = () => {
  return (
    <Fragment>
      <Executives />
    </Fragment>
  );
};

export default Team;
