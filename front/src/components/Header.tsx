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
    <nav className="bg-white shadow mb-5 absolute w-full">
      <div className="container  px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="hidden lg:block h-10 w-auto "
                src={img}
                alt="Workflow"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <div className="text-[30px]">
              <HiUserCircle />
            </div>
            <span>braia</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
