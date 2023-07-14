import React from "react";

const MenuProduct = () => {
  const ingredients = [
    "Pão de Brioche",
    "3x 80g de Blend Bovino",
    "Farofa de Bacon",
    "Fatias de Cheddar",
    "Maionese da Casa",
  ];
  return (
    <div className=" w-1/3 max-w-[340px] h-[400px] p-3 grow hover:scale-110 transition-transform  drop-shadow-sm rounded  flex flex-col items-center gap-2 cursor-pointer">
      <img
        className="w-full object-cover h-72 rounded-lg drop-shadow-lg"
        src="https://files.menudino.com/cardapios/10045/59.jpg"
        alt="comida"
      />
      <div className="w-full">
        <p className="text-lg font-normal">R$20,00</p>
        <p className="font-bold text-xl">Hmaburguer maluco</p>
        <p className="text-ellipse w-52 truncate text-sm text-base-content">
          {ingredients.join(", ")}
        </p>
        {/* <button className="btn btn-primary w-full mt-2 btn-sm">
            Pedir Agora
          </button> */}
      </div>
    </div>
  );
};

export default MenuProduct;
