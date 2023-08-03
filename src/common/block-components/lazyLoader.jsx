import { Fragment } from "react";

const LazyLoader = () => {
  return (
    <Fragment>
      <div class="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md rounded-lg">
        <div class="animate-pulse flex space-x-4">
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="space-y-2">
              <div class="h-4 bg-gray-200 rounded"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
              <div class="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LazyLoader;
