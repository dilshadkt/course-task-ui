import "./App.css";
import Auth from "./pages/Auth";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";
import ProtectedRoute from "./components/ProtectedRout";
import AdminLayout from "./layouts/AdminLayout";
import Dashborad from "./pages/Dashborad";
import Courses from "./pages/Courses";
function App() {
  const token = localStorage.getItem("token");

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
