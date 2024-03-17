import React from "react";
import "./index.scss";
import ProductsCards from "../ProducstsCards";

const Products = () => {
  return (
    <>
      <section id="products">
        <div className="products_container">
          <ProductsCards/>
        </div>
      </section>
    </>
  );
};

export default Products;
