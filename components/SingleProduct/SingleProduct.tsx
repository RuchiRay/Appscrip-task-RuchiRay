import React from "react";
import "./SingleProduct.css";
import { Item } from "../Products/Products";
import Image from "next/image";
import { GoHeart } from "react-icons/go";

type SingleProductProps = {
  data: Item;
};
export const SingleProduct = ({ data }: SingleProductProps) => {
  return (
    <div className="single-product">
      <Image src={data.image} width={280} height={300} alt={data.title} />
      <div className="title-desc">
        <p className="product-title">{data.title}</p>
        <div className="flex justify-between align-start">
          <p className="sign-in">
            <span className="underline">Sign in</span> or Create an account to
            see pricing
          </p>
          <GoHeart size={24} />
        </div>
      </div>
    </div>
  );
};
