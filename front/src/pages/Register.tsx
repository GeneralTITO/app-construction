import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="h-screen container flex items-center justify-center">
      <div className="border flex flex-col px-4 py-8 w-[350px]">
        <span>Login</span>
        <form className="mt-10">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="border rounded w-full focus:outline-none px-4 py-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              autoComplete="current-email"
              className="border rounded w-full focus:outline-none px-4 py-2"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              className="border rounded w-full focus:outline-none px-4 py-2"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 py-3 text-white w-full rounded mb-4">
              Cadastrar
            </button>
          </div>
        </form>
        <div className="flex items-center justify-end text-blue-950 underline cursor-pointer">
          <Link to={"/login"}>
            <span>Já tem conta? fazer login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
