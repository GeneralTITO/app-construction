import { createContext, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

interface Item {
  id: number;
  item_name: string;
  amount: string;
  description: string;
  expiration: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
export const PregaoContext = createContext({});

export const PregaoProvider = ({ children }: any) => {
  const [itemsCreated, setItemsCreated] = useState<Item[]>();
  // const [itemsInProgress, SetItemsInProgress] = useState();
  // const [itemsaccomplished, SetItemsaccomplished] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    const getInsumos = async () => {
      const response = await api.get(`/pregao/user/created/${userId}`);
      setItemsCreated(response.data);
    };
    getInsumos();
  }, []);

  const createPregao = async (data: any, reset: any) => {
    try {
      const token = window.localStorage.getItem("@TOKEN");
      const user_id = window.localStorage.getItem("@USERID");
      await api.post(`pregao/${user_id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log(error);
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
    }
  };

  const deletePregrao = async (id: number) => {};

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
      console.log(error);
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
        setItemsCreated,
      }}
    >
      {children}
    </PregaoContext.Provider>
  );
};
