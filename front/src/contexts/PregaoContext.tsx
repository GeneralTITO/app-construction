import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const PregaoContext = createContext({});

export const PregaoProvider = ({ children }: any) => {
  const navigate = useNavigate();

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
    <PregaoContext.Provider value={{ createPregao, setInProgressPregao }}>
      {children}
    </PregaoContext.Provider>
  );
};
