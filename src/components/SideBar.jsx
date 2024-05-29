import React from "react";
import { Link } from "react-router-dom";
import { sideBar } from "../constants";
import { nanoid } from "nanoid";

const SideBar = () => {
  return (
    <div className="h-full w-[20%] bg-white flex flex-col justify-start py-10 px-2">
      <ul className="w-full ">
        {sideBar.map((item) => (
          <Link key={nanoid()} to={`${item.path}`}>
            <li className="w-full flex-center py-4 cursor-pointer text-lg font-medium text-gray-700 hover:scale-95 transition-all duration-300 bg-gray-400 my-2 rounded-lg">
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
