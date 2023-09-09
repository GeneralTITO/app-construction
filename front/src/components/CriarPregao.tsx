import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext, useEffect } from "react";
import { Item, PregaoContext } from "../contexts/PregaoContext";

interface FormData {
  item_name: string;
  amount: string;
  description: string;
  expiration: string;
}
const schema = z.object({
  item_name: z.string().max(250).min(1, "esse campo é obrigatório"),
  amount: z.string().max(250).min(1, "esse campo é obrigatório"),
  description: z.string().max(1000).min(1, "esse campo é obrigatório"),
  expiration: z.string().min(1, "esse campo é obrigatório"),
});
export const CriarPregao = () => {
  const { getInsumos, itemsCreated }: any = useContext(PregaoContext);

  useEffect(() => {
    getInsumos();
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onsubmit = (data: FormData) => {
    console.log(data);
  };
  console.log(itemsCreated);
  return (
    <main className="flex justify-around h-full">
      <div className="w-[50%] flex items-center flex-col justify-center border-2 border-yellow-500">
        <span>Dados do item</span>
        <form className="w-[80%]" onSubmit={handleSubmit(onsubmit)}>
          <div className="flex flex-col">
            <label htmlFor="">Nome do item</label>
            <input
              type="text"
              className="rounded bg-gray-200 focus:outline-none px-4 py-2"
              {...register("item_name")}
            />
            {errors.item_name && (
              <span className="text-red-500">{errors.item_name.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Quantidade</label>
            <input
              type="text"
              className="rounded bg-gray-200 focus:outline-none px-4 py-2"
              {...register("amount")}
            />
            {errors.amount && (
              <span className="text-red-500">{errors.amount.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Descrição</label>
            <input
              type="text"
              className="rounded bg-gray-200 focus:outline-none px-4 py-2"
              {...register("description")}
            />
            {errors.description && (
              <span className="text-red-500">{errors.description.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Data de expiração</label>
            <input
              type="text"
              className="rounded bg-gray-200 focus:outline-none px-4 py-2"
              {...register("expiration")}
            />
            {errors.expiration && (
              <span className="text-red-500">{errors.expiration.message}</span>
            )}
          </div>
          <div className="flex flex-col mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded py-2"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
      <div className="w-[50%] border-2 border-green-500 overflow-y-scroll">
        {itemsCreated &&
          itemsCreated.map((item: Item) => (
            <div key={item.id}>{item.item_name}</div>
          ))}
      </div>
    </main>
  );
};
