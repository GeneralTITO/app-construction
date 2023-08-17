import { Route, Routes } from "react-router-dom";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { Home } from "../../pages/HomePage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
