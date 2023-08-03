import { lazy, Suspense } from "react";
import Loader from "../common/block-components/loader";

const Executives = lazy(() =>
  import("./../common/block-components/block-executives")
);

const Team = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Executives />
    </Suspense>
  );
};

export default Team;
