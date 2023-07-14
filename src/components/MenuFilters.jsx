import React from "react";

const MenuFilters = () => {
  const categories = [
    {
      name: "Mais vendidos",
    },
    {
      name: "Burguers",
    },
    {
      name: "Adicionais",
    },
    {
      name: "Bebidas",
    },
    {
      name: "Sobremesas",
    },

    {
      name: "Alcoólicos",
    },
    {
      name: "Combos",
    },
  ];

  return (
    <aside className="p-8 flex flex-col gap-4">
      <div>
        <h2 className="font-semibold text-xl mb-2">Categorias</h2>
        <div>
          {categories.map((category, index) => (
            <CategoryItem label={category.name} key={index} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-2">Pesquisar produto</h2>
        <input
          type="text"
          placeholder="Pesquisar "
          className="input input-bordered w-full max-w-xs"
        />
      </div>

      <div>
        <h2 className="font-semibold text-xl mb-2">Preço</h2>

        <div>
          <input
            type="range"
            min={0}
            max="100"
            value="25"
            className="range range-primary range-xs"
            step="25"
          />
          <div className="w-full flex justify-between text-sm px-0">
            <span>R&#36; 10,00</span>
            <span>R&#36; 50,00</span>
            <span>R&#36; 100,00</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

const CategoryItem = ({ label }) => {
  return (
    <div className="my-2 w-full bg-base-200 px-7 h-11 rounded-md flex items-center hover:bg-base-300 cursor-pointer justify-between">
      <p className="text-sm font-medium">{label}</p>
      {/* <p className="text-xs font-normal text-slate-600" >200</p> */}
    </div>
  );
};

export default MenuFilters;
