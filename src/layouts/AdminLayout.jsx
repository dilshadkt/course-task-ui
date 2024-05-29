import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";
import SideBar from "../components/SideBar";

const AdminLayout = () => {
  return (
    <>
      <section className="w-full h-screen bg-gray-800 overflow-hidden flex flex-col ">
        <AdminNav />
        <div className="flex h-full">
          <SideBar />
          <div className="flex-1 flex flex-col h-full overflow-y-scroll bg-gray-100 p-6">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLayout;
