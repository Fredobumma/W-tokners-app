import { Fragment } from "react";

const LazyLoader = () => {
  return (
    <Fragment>
      <div className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md rounded-lg">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LazyLoader;
