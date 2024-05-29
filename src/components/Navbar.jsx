import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/auth/login");
    localStorage.clear();
  };
  return (
    <header class="bg-red-400 w-full ">
      <div className="flex items-center justify-between py-4 md:py-8 max-w-screen-2xl mx-auto px-4 ">
        <Link to={"/"}>
          <h4 className="text-4xl font-bold text-indigo-500">Courses</h4>
        </Link>
        <nav class="hidden gap-12 lg:flex">
          <Link
            to={"/"}
            class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Available Courses
          </Link>
          <Link
            to={"/"}
            class="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500"
          >
            Enrolled
          </Link>
          <Link
            to={"/"}
            class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Wating
          </Link>
        </nav>

        <div
          onClick={() => Logout()}
          title="logout"
          className="w-16 rounded-full cursor-pointer bg-black h-16"
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
