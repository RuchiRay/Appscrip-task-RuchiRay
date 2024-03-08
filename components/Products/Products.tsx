import React from "react";
import "./Products.css";
import { SingleProduct } from "../SingleProduct/SingleProduct";

export type Item = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: any;
};
export const Products = async () => {
  const request = await fetch("https://fakestoreapi.com/products?sort=desc");
  const data = await request.json();
  console.log(data);

  return (
    <div className="products-wrapper flex flex-wrap">
      {data.map((item: Item) => {
        return <SingleProduct key={item.id} data={item} />;
      })}
    </div>
  );
};
