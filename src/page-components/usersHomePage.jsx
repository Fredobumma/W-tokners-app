import { lazy, Suspense } from "react";
import Loader from "../common/block-components/loader";

const Hero = lazy(() => import("../common/block-components/block-auth-hero"));
const Objectives = lazy(() =>
  import("../common/block-components/block-auth-objectives")
);
const Services = lazy(() =>
  import("../common/block-components/block-auth-services")
);

const UsersHomePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Hero />
      <Objectives />
      <Services />
    </Suspense>
  );
};

export default UsersHomePage;
