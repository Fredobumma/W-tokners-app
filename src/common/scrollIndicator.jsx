const ScrollIndicator = ({ pages, active, classes, goTo }) => {
  return (
    <ol className="flex flex-wrap gap-x-2.5 gap-y-5 items-center justify-center mt-30px laptop:hidden">
      {pages.map((_, i) => (
        <li
          key={i}
          className={`cursor-pointer inline-block rounded-all ${classes} ${
            i === active ? "p-1" : "bg-transparent border-[1px] h-fit p-[1px]"
          }`}
          onClick={() => goTo(i)}
        ></li>
      ))}
    </ol>
  );
};

export default ScrollIndicator;
