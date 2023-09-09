import React, { useState } from "react";
import { z } from "zod";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(30),
});
interface LoginFormValues {
  email: string;
  password: string;
}
export const Login = () => {
  const { userLogin, loading }: any = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: LoginFormValues) => {
    userLogin(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
            disabled={loading ? true : false}
          >
            {loading ? "Processando..." : "Entrar"}
          </button>
        </div>
      </form>
    </div>
  );
};
