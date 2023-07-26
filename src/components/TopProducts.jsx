import React from "react";
import { useQuery } from "react-query";
import { getTopBurguers } from "../service/api";
import Cart from "../icons/Cart";

const TopProducts = () => {
  const { error, data, isFetching } = useQuery("burguers", () =>
    getTopBurguers()
  );
  console.log(data);
  if (error) return <h2>Ocorreu um erro</h2>;
  else if (isFetching) return <h2>Loading...</h2>;

  return (
    <>
      {/* <h3 className="absolute relative bottom-4 font-bold drop-shadow-sm text-2xl">
        Preferidos da Casa
      </h3> */}
      <div className="w-full h-full px-12 flex items-center justify-center">
        {data.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

const ProductCard = ({ data }) => {
  const { name, imageUrl, price, ingredients } = data;
  return (
    <div className="grow hover:scale-110 hover:z-40 w-96 transition-transform bg-base-100 drop-shadow-md rounded-lg rounded cursor-pointer m-4 max-h-96 flex flex-col items-center gap-0">
      <img
        className="w-full object-cover h-56 rounded-t-lg"
        src={imageUrl}
        alt={name}
      />
      <div className="w-full p-3">
        <div>
          <p className="text-lg font-normal">R${price.amount},00</p>
          <p className="font-bold text-xl">{name}</p>
          <p className="text-clip text-overlength text-slate-600 text-sm text-base-content">
            {ingredients.join(", ")}
          </p>
          
          <button className="btn btn-primary w-full mt-2 btn-sm">
            Pedir Agora
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
