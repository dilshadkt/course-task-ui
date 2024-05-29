import React from "react";
import { Outlet, redirect } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
