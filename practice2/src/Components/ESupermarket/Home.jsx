import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./ProductItem.css";
import { Productlist } from "./ProductList";
import { getProducts } from "./service/products";
import { TopNav } from "./TopNav";

export const Home = () => {
  const dispatch = useDispatch();

  const allProducts = async () => {
    const products = await getProducts();
    dispatch({
      type: "ADD_PRODUCT",
      data: products,
    });
  };
  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <TopNav />
      <Productlist />
    </div>
  );
};
