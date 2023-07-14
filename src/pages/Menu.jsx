import React from "react";
import MenuFilters from "../components/MenuFilters";
import MenuProduct from "../components/MenuProduct";

const Menu = () => {

  return (
    <>
      <div className="h-full w-full grid grid-cols-menuLayout">
        <MenuFilters/>
        <main className="flex items-center flex-wrap p-8 gap-y-0 justify-start">
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
          <MenuProduct/>
        </main>
      </div>
    </>
  );
};


export default Menu;
