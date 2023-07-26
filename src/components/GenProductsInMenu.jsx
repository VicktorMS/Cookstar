import React from "react";
import { useQuery } from "react-query";
import { getAllProducts } from "../service/api";
import MenuDrink from './MenuDrink'
import MenuProduct from "./MenuProduct";

const GenProductsInMenu = () => {
  const { error, data, isFetching } = useQuery("burguers", () =>
    getAllProducts()
  );
  console.log(data);
  if (error) return <h2>Ocorreu um erro</h2>;
  else if (isFetching) return <h2>Loading...</h2>;

  return (
    <>
      {data.map((product) => (
        product.productType === "burger" ?
        <MenuProduct data={product} key={product.id} /> :
        <MenuDrink key={product.id} data={product}/>
      ))}
    </>
  );
};

export default GenProductsInMenu;
