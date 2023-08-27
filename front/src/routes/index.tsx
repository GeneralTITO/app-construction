import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeConstructor } from "../pages/HomeConstructor";
import { HomeSeller } from "../pages/HomeSeller";
import { PregaoProvider } from "../contexts/PregaoContext";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/homeConstructor"
        element={
          <PregaoProvider>
            <HomeConstructor />
          </PregaoProvider>
        }
      />
      <Route path="/homeSeller" element={<HomeSeller />} />
    </Routes>
  );
};
