import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRout";
import Axios from "./config/Axios";
import MyContext from "./context/MyContext";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";
import Auth from "./pages/Auth";
import Courses from "./pages/Courses";
import Dashborad from "./pages/Dashborad";
import Home from "./pages/Home";
function App() {
  const token = localStorage.getItem("token");
  const { setCourses, setEnrolled } = useContext(MyContext);
  useEffect(() => {
    Axios.get("course")
      .then((res) => {
        setCourses(res.data.courses);
      })
      .catch((err) => console.log(err));
    Axios.get("enroll/enrolled")
      .then((res) => {
        console.log(res);
        setEnrolled(res.data.enrolled_course);
      })
      .catch((err) => console.log(err));
  }, [setCourses, setEnrolled]);

  return (
    <div className="">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute path={"/auth/login"}>
              <HomeLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/auth"
          element={token ? <Navigate to={"/"} /> : <AuthLayout />}
        >
          <Route path="/auth/login" element={<Auth />} />
          <Route path="/auth/signin" element={<Auth />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashborad />} />
          <Route path="courses" element={<Courses />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
