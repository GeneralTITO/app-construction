import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeConstructor } from "../pages/HomeConstructor";
import { HomeSeller } from "../pages/HomeSeller";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homeConstructor" element={<HomeConstructor />} />
      <Route path="/homeSeller" element={<HomeSeller />} />
    </Routes>
  );
};
