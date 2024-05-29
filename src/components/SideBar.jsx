import React from "react";

const SideBar = () => {
  return (
    <div className="h-full w-[20%] bg-white flex flex-col justify-start py-10 px-2">
      <ul className="w-full ">
        <li className="w-full flex-center py-4 cursor-pointer text-lg font-medium text-gray-700 hover:scale-95 transition-all duration-300 bg-gray-400 my-2 rounded-lg">
          Users
        </li>
        <li className="w-full flex-center py-4 cursor-pointer text-lg font-medium text-gray-700 hover:scale-95 transition-all duration-300 bg-gray-400 my-2 rounded-lg">
          Coursers
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
