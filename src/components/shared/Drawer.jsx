import React from "react";

const Drawer = ({ children, id }) => {
  return (
    <div className="drawer drawer-end">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 flex flex-col h-full min-h-full bg-base-200 text-base-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
