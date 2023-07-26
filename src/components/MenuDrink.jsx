import React from "react";

const MenuDrink = ({ data }) => {
  const { name, imageUrl, price, flavors } = data;
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className=" w-1/3 max-w-[340px] h-[400px] p-3 grow hover:scale-110 transition-transform  drop-shadow-sm rounded  flex flex-col items-center gap-2 cursor-pointer">
      <img
        className="w-full object-cover h-72 rounded-lg drop-shadow-lg"
        src={imageUrl}
        alt={name}
      />
      <div className="w-full">
        <p className="text-lg font-sm">{formatter.format(price[0].amount) + " - " + formatter.format(price[price.length - 1].amount)}</p>
        <p className="font-bold text-xl">{name}</p>
        <p className="text-ellipse w-w-full truncate text-sm text-base-content">
          Sabores: {flavors.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MenuDrink;
