import { Fragment, lazy } from "react";

const Hero = lazy(() => import("../common/block-components/block-auth-hero"));
const Objectives = lazy(() =>
  import("../common/block-components/block-auth-objectives")
);
const Services = lazy(() =>
  import("../common/block-components/block-auth-services")
);

const UsersHomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Objectives />
      <Services />
    </Fragment>
  );
};

export default UsersHomePage;
