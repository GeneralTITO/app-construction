import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioButton } from "../components/Checkbox";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(30),
  is_constructor: z.string(),
});

interface RegisterFormValues {
  name: string;
  email: string;
  is_constructor: boolean;
  password: string;
  asd: string;
}

export const Register = () => {
  const { userRegister, loading }: any = useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    if (data.is_constructor === "true") {
      data.is_constructor = true;
    } else {
      data.is_constructor = false;
    }
    userRegister(data);
  };

  return (
    <div className="h-screen container flex items-center justify-center">
      <div className="border flex flex-col px-4 py-8 w-[350px]">
        <span>Register</span>
        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className={`border rounded w-full focus:outline-none px-4 py-2 focus:border-blue-500 ${
                errors.name ? "border-red-500" : ""
              }`}
              {...register("name")}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
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
          <div className="m-5 flex items-center justify-between">
            <RadioButton
              label="construtor"
              value="true"
              name="is_constructor"
              register={register("is_constructor")}
            />
            <RadioButton
              label="vendedor"
              value="false"
              name="is_constructor"
              register={register("is_constructor")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              className={`border rounded w-full focus:outline-none px-4 py-2 focus:border-blue-500 ${
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
              {loading ? "Processando..." : "Cadastrar"}
            </button>
          </div>
        </form>
        <div className="flex items-center justify-end text-blue-950 underline cursor-pointer">
          <Link to={"/"}>
            <span>Já tem conta? fazer login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
