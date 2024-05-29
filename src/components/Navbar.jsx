import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    navigate("/auth/login");
    localStorage.clear();
  };
  const [searchparams] = useSearchParams();
  const filter = searchparams.get("filter");

  return (
    <header className="bg-red-400 w-full ">
      <div className="flex items-center justify-between py-4 md:py-8 max-w-screen-2xl mx-auto px-4 ">
        <Link to={"/"}>
          <h4 className="text-4xl font-bold text-indigo-500">Courses</h4>
        </Link>
        <nav className="hidden gap-12 lg:flex">
          <Link
            to={"/?filter=available courses"}
            className={`text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 ${
              filter === "available courses" && "text-indigo-700"
            }`}
          >
            Available Courses
          </Link>
          <Link
            to={"/?filter=enrolled"}
            className={`inline-flex items-center gap-1 text-lg font-semibold ${
              filter === "enrolled" && "text-indigo-500"
            }`}
          >
            Enrolled
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
