import React from "react";
// import { UserContext } from "../contexts/UserContext";
import img from "../assets/imagem_2023-08-29_145452489-removebg-preview.png";
import { HiUserCircle } from "react-icons/hi";
const Header: React.FC = () => {
  // const { userLogout }: any = useContext(UserContext);

  // const handleSair = () => {
  //   userLogout();
  // };
  return (
    <nav className="bg-white shadow absolute w-full">
      <div className="container  py-3 flex justify-between">
        <div className="flex">
          <img className="h-10" src={img} alt="Workflow" />
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="text-[30px]">
            <HiUserCircle />
          </div>
          <span>braia</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
