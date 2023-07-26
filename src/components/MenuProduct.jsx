import React from "react";
import Cart from "../icons/Cart";
import StarIconOut from "../icons/StarIconOut";

const MenuProduct = ({ data }) => {
  const { name, imageUrl, price, ingredients } = data;
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className=" w-1/3 max-w-[340px] h-[400px] p-3 grow hover:scale-105 transition-transform  drop-shadow-sm rounded  flex flex-col items-center gap-2 cursor-pointer">
      <img
        className="w-full object-cover h-72 rounded-lg drop-shadow-lg"
        src={imageUrl}
        alt={name}
      />
      <div className="w-full relative">
        <p className="text-lg font-normal">{formatter.format(price.amount)}</p>
        <p className="font-bold text-xl">{name}</p>
        <p className="text-ellipse w-w-full truncate text-sm text-base-content">
          {ingredients.join(", ")}
        </p>
        <div className="flex items-center text-primary-content rounded-full bg-primary right-4 top-4 drop-shadow-sm btn-sm absolute">
          <StarIconOut />
          <span className="font-bold">5.0</span>
        </div>
      </div>
    </div>
  );
};

export default MenuProduct;
