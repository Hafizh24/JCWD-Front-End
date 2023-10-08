import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/register");
  };
  const handleClickLogin = () => {
    navigate("/");
  };

  return (
    <>
      <nav className=" bg-slate-100 flex justify-between mb-20 pb-4 px-8 pt-4">
        <div>
          <h1 className="uppercase text-orange-500 text-2xl">socio</h1>
        </div>
        <div className="flex gap-x-4">
          <button
            onClick={handleClickLogin}
            className=" border border-orange-500 px-2 py-1 text-white rounded-lg bg-orange-500">
            Login
          </button>
          <button
            onClick={handleClickRegister}
            className=" border border-orange-500 px-2 py-1 text-white rounded-lg bg-orange-500">
            Register
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
