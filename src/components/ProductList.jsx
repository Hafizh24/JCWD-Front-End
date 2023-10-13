import React from "react";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector((state) => state.cart.value);

  return (
    <div className=" mx-14">
      <h1 className=" mb-8">Product List</h1>
      <ul className="flex flex-col gap-y-12">
        {products.map((product) => (
          <li key={product.id}>
            <h3 className="mb-2">{product.name}</h3>
            <p className="mb-4">Rp.{product.price}</p>
            <img src={product.img} className=" w-20 h-20" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
