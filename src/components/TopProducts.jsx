import React from "react";
import { useQuery } from "react-query";
import { getAllBurguers } from "../service/api";
import axios from "axios";

const TopProducts = () => {
  const { error, data, isFetching } = useQuery("burguers", () =>
    getAllBurguers()
  );
  console.log(data);
  if (error) return <h2>Ocorreu um erro</h2>;
  else if (isFetching) return <h2>Loading...</h2>;

  return (
    <>
      <h3 className="absolute relative bottom-4">Que Fazem Sucesso</h3>
      <div className="w-full h-full px-12 flex">
        {data[0].items.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

const ProductCard = ({ data }) => {
  const { name, imageUrl, price } = data;
  return (
    <div className="p-3 grow bg-base-100 drop-shadow-md rounded m-4 max-h-96 flex flex-col items-center gap-2">
      <img className="w-72 object-cover h-56 rounded-sm" src={imageUrl} alt={name} />
      <div className="w-full">
        <p>{name}</p>
        <div>
          <p className="font-bold text-xl">R${price.amount},00</p>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;


