const Collapsible = ({ collapse, toggle }) => {
  return (
    <p
      onClick={toggle}
      className="cursor-pointer font-bold text-green-600 underline underline-offset-3 w-fit laptop:hidden"
    >
      {(collapse && "Read More") || "Hide"}
    </p>
  );
};

export default Collapsible;
