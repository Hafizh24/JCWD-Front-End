import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addItem, selectCartTotal } from "../redux/cartSlice";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.value);
  const total = useSelector(selectCartTotal);

  useEffect(() => {
    axios
      .get("http://localhost:2000/products")
      .then((response) => {
        dispatch(addItem(response.data));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <nav
        aria-label="primary"
        class="relative z-20 flex-grow flex pb-4 pr-20 bg-slate-200 items-center">
        <h1 className="ml-4">AliShop</h1>
        <div class="relative group  justify-end flex ml-[48rem]">
          <button
            class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg  focus:outline-none font-montserrat cursor-pointer"
            onClick={handleClick}
            type="button">
            <span className=" flex">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <sup className=" bg-red-700 border rounded-full text-white w-5 h-5 text-xs text-center">
                {total}
              </sup>
            </span>
          </button>
          <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div class="px-2 pt-2 pb-4 bg-gray-200 shadow-lg">
              <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <ul>
                  {products.map((product) => (
                    <li key={product.id}>
                      <h3>{product.name}</h3>
                      <p>Rp.{product.price}</p>
                      <img src={product.img} className=" w-8 h-8" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

{
  /* <nav aria-label="primary" class="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
  
  <div class="relative group">
      <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>First Dropdown</span>
      </button>
      <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here
              </p>
            </div>
          </div>
      </div>
  </div>  
  
  <div class="relative group">
      <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
          <span>Second Dropdown</span>
      </button>
      <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
          
          <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <p>
                dropdown content here
              </p>
            </div>
          </div>
      </div>
  </div>   
</nav> */
}
