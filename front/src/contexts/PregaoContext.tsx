import { ReactNode, createContext, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

export interface Item {
  id: number;
  item_name: string;
  amount: string;
  description: string;
  expiration: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface PregaoContextType {
  createPregao: (data: any, reset: () => void) => void;
  setInProgressPregao: (id: number) => void;
  itemsCreated: Item[] | undefined;
  getInsumos: () => void;
  editPregao: (data: any, reset: () => void, id_pregao: number) => void;
}

interface PregaoProviderProps {
  children: ReactNode;
}
export const PregaoContext = createContext<PregaoContextType | undefined>(
  undefined
);

export const PregaoProvider = ({ children }: PregaoProviderProps) => {
  const [itemsCreated, setItemsCreated] = useState<Item[] | undefined>();

  const getInsumos = async () => {
    const userId = localStorage.getItem("@USERID");
    const response = await api.get<Item[]>(`/pregao/user/created/${userId}`);
    setItemsCreated(response.data);
  };

  const createPregao = async (data: any, reset: () => void) => {
    try {
      const token = window.localStorage.getItem("@TOKEN");
      const user_id = window.localStorage.getItem("@USERID");
      await api.post(`pregao/${user_id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);

    } finally {
      toast.success("pregao criado com sucesso!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
      getInsumos();
    }
  };

  const editPregao = async (
    data: any,
    reset: () => void,
    id_pregao: number
  ) => {
    try {
      const token = window.localStorage.getItem("@TOKEN");
      await api.patch(`pregao/${id_pregao}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      toast.success("pregao atualizado!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
      getInsumos();
    }
  };

  const setInProgressPregao = async (id: number) => {
    try {
      const token = window.localStorage.getItem("@TOKEN");
      await api.patch(
        `pregao/${id}`,
        { status: "in_progress" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);

    } finally {
      toast.success("pregao iniciado com sucesso!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <PregaoContext.Provider
      value={{
        createPregao,
        setInProgressPregao,
        itemsCreated,
        getInsumos,
        editPregao,
      }}
    >
      {children}
    </PregaoContext.Provider>
  );
};
