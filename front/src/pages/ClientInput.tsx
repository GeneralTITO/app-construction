import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ItemsCreate } from "../components/ItemsCreate";
import { ItemsAccomplished } from "../components/ItemsAccomplished";
import { ItemsInProgress } from "../components/ItemsInProgress";

export const HomeConstructorPregao: React.FC = () => {
  const [activeTab, setActiveTab] = useState("created");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderSelectedTab = () => {
    if (activeTab === "created") {
      return <ItemsCreate />;
    } else if (activeTab === "accomplished") {
      return <ItemsAccomplished />;
    } else if (activeTab === "inprogress") {
      return <ItemsInProgress />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto flex">
        <div className="w-1/4 flex flex-col gap-5">
          <div>
            <div className="flex gap-2">
              <button className=" bg-indigo-300 hover:bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                <Link to={"/ClientShop"}>Comprar avulso</Link>
              </button>
              <button className="bg-indigo-500 text-white px-3 py-2 rounded-md text-sm font-medium">
                Pregão
              </button>
            </div>
          </div>
          <div className=" bg-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <button
              className={`${
                activeTab === "created"
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-300 hover:bg-indigo-500 text-white hover:text-white"
              } px-3 py-2 rounded-md text-sm font-medium mb-2`}
              onClick={() => handleTabChange("created")}
            >
              Itens em Progresso
            </button>
            <button
              className={`${
                activeTab === "accomplished"
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-300 hover:bg-indigo-500 text-white hover:text-white"
              } px-3 py-2 rounded-md text-sm font-medium mb-2`}
              onClick={() => handleTabChange("accomplished")}
            >
              Itens Criados
            </button>
            <button
              className={`${
                activeTab === "inprogress"
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-300 hover:bg-indigo-500 text-white hover:text-white"
              } px-3 py-2 rounded-md text-sm font-medium mb-2`}
              onClick={() => handleTabChange("inprogress")}
            >
              Itens Concluídos
            </button>
          </div>
        </div>
        <div className="w-3/4 p-4">{renderSelectedTab()}</div>
      </div>
    </div>
  );
};
