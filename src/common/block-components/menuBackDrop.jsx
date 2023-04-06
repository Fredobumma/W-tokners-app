import React from "react";

const MenuBackDrop = ({ menu, toggleMenu }) => {
  return (
    <>
      {menu && (
        <div
          onClick={() => toggleMenu(false)}
          className="fixed cursor-pointer h-screen inset-0 w-screen z-[70] bigTab:-ml-8 laptop:h-0 laptop:static laptop:w-0"
        ></div>
      )}
    </>
  );
};

export default MenuBackDrop;
