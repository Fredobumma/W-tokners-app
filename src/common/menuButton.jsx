const MenuButton = ({ icon, menu, toggleMenu }) => {
  return (
    <button
      aria-label="menu"
      type="button"
      className="group z-[100] laptop:hidden"
      onClick={toggleMenu}
    >
      <div className="p-2.5 rounded-full w-fit h-fit bg-trasnparent ring-0 ring-gray-400 transform transition-all hover:ring-8 group-focus:ring-4 ring-opacity-30 shadow-md">
        <div className="flex flex-col justify-between w-[20px] h-[20px] origin-center overflow-hidden">
          {icon.map((icon, index) => (
            <div
              key={index}
              className={`bg-dark h-[2px] w-7 transform transition-all dark:bg-white ${
                icon !== "hidden" && "origin-left"
              } ${menu && icon}`}
            ></div>
          ))}
        </div>
      </div>
    </button>
  );
};

export default MenuButton;
