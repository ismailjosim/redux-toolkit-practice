import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
