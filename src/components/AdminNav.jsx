import React from "react";
import Button from "./shared/Button";

const AdminNav = () => {
  return (
    <nav className="h-[70px] flex items-center justify-end max-w-screen-2xl mx-auto px-5  w-full">
      <Button title={"Logout"} bgColor={"btn-blue"} />
    </nav>
  );
};

export default AdminNav;
