import React, { useContext } from "react";
import { Button } from "@mui/material";
import { UserContext } from "../contexts/UserContext";
const Header: React.FC = () => {
  const { userLogout }: any = useContext(UserContext);

  const handleSair = () => {
    userLogout();
  };
  return (
    <div className="w-full">
      <div className="container flex justify-end">
        <Button variant="contained" onClick={handleSair}>
          sair
        </Button>
      </div>
    </div>
  );
};

export default Header;
