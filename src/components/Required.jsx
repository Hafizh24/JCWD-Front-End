import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Required = () => {
  const id = localStorage.getItem("id");
  return <>{id ? <Outlet /> : <Navigate to="/" />}</>;
};

export default Required;
