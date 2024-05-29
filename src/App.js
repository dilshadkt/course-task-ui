import "./App.css";
import Auth from "./pages/Auth";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="text-red-500">
      <Routes>
        <Route path="/auth/signin" element={<Auth />} />
        <Route path="/auth/login" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
