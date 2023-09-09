import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeConstructorPregao } from "../pages/ClientInput";
import { ClientShop } from "../pages/ClientShop";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ClientInput" element={<HomeConstructorPregao />} />
      <Route path="/ClientShop" element={<ClientShop />} />
    </Routes>
  );
};
