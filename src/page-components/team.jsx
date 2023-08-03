import { lazy, Suspense } from "react";
import LazyLoader from "./../common/block-components/lazyLoader";

const Executives = lazy(() =>
  import("./../common/block-components/block-executives")
);

const Team = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Executives />
    </Suspense>
  );
};

export default Team;
