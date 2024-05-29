import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [courses, setCourses] = useState(null);
  const data = {
    courses,
    setCourses,
  };

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
};

export default MyProvider;
