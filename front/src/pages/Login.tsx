import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(30),
});

interface LoginFormValues {
  email: string;
  password: string;
}

export const Login = () => {
  const { userLogin }: any = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: LoginFormValues) => {
    userLogin(data);
  };

  return (
    <div className="h-screen container flex items-center justify-center">
      <div className="border flex flex-col px-4 py-8 w-[350px]">
        <span>Login</span>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="current-email"
              className={`border rounded w-full focus:outline-none px-4 py-2 focus:border-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email")}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              className={`border rounded w-full focus:outline-none px-4 py-2  focus:border-blue-500${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password")}
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 py-3 text-white w-full rounded mb-4"
            >
              Entrar
            </button>
          </div>
        </form>
        <div className="flex items-center justify-end text-blue-950 underline cursor-pointer">
          <Link to={"/register"}>
            <span>Cadastrar</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
