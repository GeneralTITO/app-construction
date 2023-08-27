import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // const { state } = useLocation();
  const navigate = useNavigate();

  // const pathname = window.location.pathname;

  //   useEffect(() => {
  //     const token = localStorage.getItem("@TOKEN");
  //     const userId = localStorage.getItem("@USERID");

  //     const getUser = async () => {
  //       try {
  //         setLoading(true);
  //         const { data } = await api.get(`/users/${userId}`, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //         setUser(data);
  //         navigate(pathname);
  //       } catch (error) {
  //         console.log(error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     if (token && userId) {
  //       getUser();
  //     }
  //   }, []);

  const userLogin = async (formData: any) => {
    try {
      setLoading(true);
      const { data } = await api.post("/login", formData);
      setUser(data.user_id);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user_id);
      if (data.is_constructor) {
        navigate("/homeConstructor");
      } else {
        navigate("/homeSeller");
      }
    } catch (error: any) {
      console.log(error);
      if (error.response?.data.message === "Invalid credentials") {
        toast.error("email ou senha incorretos");
      }
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (formData: any) => {
    try {
      // setLoading(true);

      await api.post("/user", formData);
      navigate("/login");
      //   toast.success("Cadastro realizado com sucesso!");
    } catch (error: any) {
      console.log(error);
      if (error.response?.data === "Email already exists") {
        // toast.error("Usuário já cadastrado");
      }
    } finally {
      // setLoading(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    navigate("/login");
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  return (
    <UserContext.Provider
      value={{ user, userLogin, userRegister, userLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
