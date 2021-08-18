import React from "react";
import "./ProductItem.css";
import { Productlist } from "./ProductList";
import { TopNav } from "./TopNav";

export const Home = () => {
  return (
    <div>
      <TopNav />
      <Productlist />
    </div>
  );
};
