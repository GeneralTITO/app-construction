import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export const Sidebar: React.FC = () => {
  const { handleButtonClick, selectedButton }: any = useContext(SidebarContext);

  return (
    <div className="bg-blue-800 text-white h-screen w-[15%] p-4">
      <h2 className="text-2xl font-semibold mb-4 mt-[80px]">Menu</h2>
      <div className="space-y-2">
        <div className="text-[1.3rem]">avulso</div>
        <div className="flex flex-col gap-3 ml-5 text-gray-400">
          <button
            className={`flex justify-start ${selectedButton === 0 ? 'text-white' : ''}`}
            onClick={() => handleButtonClick(0)}
          >
            lojas
          </button>
          <button
            className={`flex justify-start ${selectedButton === 1 ? 'text-white' : ''}`}
            onClick={() => handleButtonClick(1)}
          >
            materiais
          </button>
        </div>
        <div className="text-[1.3rem]">pregao</div>
        <div className="flex flex-col gap-3 ml-5 text-gray-400">
          <button
            className={`flex justify-start ${selectedButton === 2 ? 'text-white' : ''}`}
            onClick={() => handleButtonClick(2)}
          >
            criar
          </button>
          <button
            className={`flex justify-start ${selectedButton === 3 ? 'text-white' : ''}`}
            onClick={() => handleButtonClick(3)}
          >
            ativos
          </button>
          <button
            className={`flex justify-start ${selectedButton === 4 ? 'text-white' : ''}`}
            onClick={() => handleButtonClick(4)}
          >
            finalizados
          </button>
        </div>
      </div>
    </div>
  );
};