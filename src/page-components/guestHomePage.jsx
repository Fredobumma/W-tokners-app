import { Suspense, lazy } from "react";
import LazyLoader from "./../common/block-components/lazyLoader";

const Hero = lazy(() => import("../common/block-components/block-hero"));
const Features = lazy(() =>
  import("../common/block-components/block-features")
);
const Services = lazy(() =>
  import("../common/block-components/block-services")
);
const Objectives = lazy(() =>
  import("../common/block-components/block-objectives")
);
const Showcase = lazy(() =>
  import("../common/block-components/block-showcase")
);
const Presale = lazy(() => import("../common/block-components/block-presale"));
const PurchaseGuide = lazy(() =>
  import("../common/block-components/block-purchase")
);

const GuestHomePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Hero />
      <Features />
      <Services />
      <Objectives />
      <Showcase />
      <Presale />
      <PurchaseGuide />
    </Suspense>
  );
};

export default GuestHomePage;
