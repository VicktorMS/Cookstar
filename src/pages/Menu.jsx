import React from "react";
import MenuFilters from "../components/MenuFilters";
import GenProductsInMenu from "../components/GenProductsInMenu";

const Menu = () => {
  return (
    <>
      <div className="h-full w-full grid grid-cols-menuLayout">
        <MenuFilters />
        <main className="flex items-start flex-wrap p-8 gap-0 justify-start">
          <GenProductsInMenu />
        </main>
      </div>
    </>
  );
};

export default Menu;
