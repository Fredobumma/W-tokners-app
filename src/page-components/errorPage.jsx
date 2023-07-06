import { Suspense, lazy } from "react";
import Loader from "./../common/block-components/loader";

const SVG = lazy(async () => ({
  default: (await import("../common/svg")).SVG,
}));
const SVGSource = lazy(async () => ({
  default: (await import("../common/svg")).SVGSource,
}));

const ErrorPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <section className="py-10 relative tab:py-60px laptop:pb-0 laptop:pt-20">
        <SVGSource />
        <div className="border-t h-[50vh] max-w-1024 mt-5 mx-auto pb-5 pt-5 rounded-all shadow-xl text-center">
          <div className="flex flex-col justify-center h-full">
            <div className="mx-auto relative w-fit">
              <h1 className="font-bold text-6xl text-yellow w-full">ERROR</h1>
              <div className="bg-green-600 -mt-5 mx-auto px-2.5 relative rounded-all w-fit z-10">
                <p className="bg-clip-text bg-ouwee font-bold rounded-all text-transparent text-xs tab:text-sm">
                  Ouwee...
                </p>
              </div>
              <span className="absolute right-0 bottom-2/3 max-w-[50px]">
                <SVG id="404" />
              </span>
            </div>
            <p className="mt-5 text-center max-w-640 mx-auto px-5 tab:text-lg bigTab:text-xl laptop:text-lg">
              Error loading page!!! Please check or update your browser, if
              error persists contact support:{" "}
              <a
                href="mailto:fredobumma@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-3"
              >
                fredobumma@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default ErrorPage;
