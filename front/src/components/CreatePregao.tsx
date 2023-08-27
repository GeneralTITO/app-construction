import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/pt-br";
import dayjs from "dayjs";
import { api } from "../services/api";
import { toast } from "react-toastify";
dayjs.locale("pt-br");

interface FormData {
  item_name: string;
  amount: string;
  description: string;
  expiration: any;
}

export const CreatePregao: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const createPregao = async (data: any) => {
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
  const onSubmit = (data: any) => {
    console.log(data);
    const expiration = `${data.expiration.$D}/${data.expiration.$M + 1}/${
      data.expiration.$y
    }`;
    delete data.expiration;
    data.expiration = expiration;
    createPregao(data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br">
      <Container maxWidth="sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 border p-10"
        >
          <Typography variant="h4" align="center" gutterBottom>
            Dados do Item
          </Typography>
          <Controller
            name="item_name"
            control={control}
            defaultValue=""
            rules={{ required: "Nome do item é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome do Item"
                fullWidth
                error={!!errors.item_name}
                helperText={errors.item_name?.message}
              />
            )}
          />
          <Controller
            name="amount"
            control={control}
            defaultValue=""
            rules={{ required: "Quantidade é obrigatória" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Quantidade"
                fullWidth
                error={!!errors.amount}
                helperText={errors.amount?.message}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: "Descrição é obrigatória" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Descrição"
                fullWidth
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            )}
          />
          <Controller
            name="expiration"
            control={control}
            defaultValue={null}
            rules={{ required: "Data de expiração é obrigatória" }}
            render={({ field }) => (
              <DatePicker {...field} label="Data de expiração" />
            )}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Criar
          </Button>
        </form>
      </Container>
    </LocalizationProvider>
  );
};
