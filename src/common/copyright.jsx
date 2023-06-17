import { SVG } from "./svg";

const Copyright = ({ year }) => {
  return (
    <div className="flex flex-col gap-y-2.5 items-center bigTab:gap-y-4 laptop:items-end">
      <p className="font-bold text-sm">
        &copy; {year} Tokners. All rights reserved.
      </p>
      <p className="flex gap-x-1 items-center text-xs underline underline-offset-2">
        <SVG id="my-logo" />
        Built by Manfred Obumma
      </p>
      <p className="flex gap-x-1 items-center text-xs underline underline-offset-2">
        <SVG id="oleg-logo" />
        Design by Oleg Kulik
      </p>
    </div>
  );
};

export default Copyright;
