import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { Lojas } from "../components/Lojas";
import { Materiais } from "../components/Materiais";
import { CriarPregao } from "../components/CriarPregao";
import { PregaoAtivos } from "../components/PregaoAtivos";
import { PregaoFinalizados } from "../components/PregaoFinalizados";



export const ConstructorHome = () => {
  const { selectedButton }: any = useContext(SidebarContext);

  const renderContent = () => {
    if (selectedButton === 0) {
      return <Lojas />;
    } else if (selectedButton === 1) {
      return <Materiais />;
    } else if (selectedButton === 2) {
      return <CriarPregao />;
    } else if (selectedButton === 3) {
      return <PregaoAtivos />;
    } else if (selectedButton === 4) {
      return <PregaoFinalizados />;
    }
  };
  return (
    <>
      <div className="relative min-h-screen bg-slate-50">
        <Header />
        <div className="w-full flex">
          <Sidebar />
          <div className=" w-full  border-red-900 border-4 mt-[80px]" id="jjj">
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};
