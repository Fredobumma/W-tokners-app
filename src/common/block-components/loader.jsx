import { Suspense, lazy } from "react";

const SVG = lazy(async () => ({ default: (await import("../svg")).SVG }));

const Loader = () => {
  return (
    <Suspense>
      <div className="bg-light bottom-0 fixed flex h-screen items-center justify-center left-0 right-0 top-0 w-screen z-[120] dark:bg-dark">
        <figure className="animate-ping">
          <SVG id="logo" />
        </figure>
      </div>
    </Suspense>
  );
};

export default Loader;
