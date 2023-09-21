import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { Item, PregaoContext } from "../contexts/PregaoContext";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { z } from "zod";

interface TableProps {
  item: Item;
}
const schema = z.object({
  item_name: z.string().min(3).max(255),
  amount: z.string().min(1).max(50),
  description: z.string().max(1000),
  expiration: z.date(),
});
interface FormData {
  item_name: string;
  amount: string;
  description: string;
  expiration: string;
}
export const TableRow = ({ item }: TableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { editPregao }: any = useContext(PregaoContext);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleEdit = (item: Item) => {
    onOpen();
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onClose();
  };
  return (
    <>
      <Tr key={item.id}>
        <Td>{item.id}</Td>
        <Td>{item.item_name}</Td>
        <Td>{item.amount}</Td>
        <Td fontSize="smaller" whiteSpace="normal">
          {item.description}
        </Td>
        <Td>{item.expiration}</Td>
        <Td>
          <Flex gap={1}>
            <Button>ativar</Button>
            <Button onClick={() => handleEdit(item)}>
              <BiEditAlt />
            </Button>
            <Button>
              <AiOutlineDelete />
            </Button>
          </Flex>
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Item</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Controller
                name="item_name"
                control={control}
                defaultValue={item.item_name}
                render={({ field }) => (
                  <Input {...field} placeholder="Nome do Item" />
                )}
              />
              {errors.item_name && <span>{errors.item_name.message}</span>}

              <Controller
                name="amount"
                control={control}
                defaultValue={item.amount}
                render={({ field }) => (
                  <Input {...field} placeholder="Quantidade" />
                )}
              />
              {errors.amount && <span>{errors.amount.message}</span>}

              <Controller
                name="description"
                control={control}
                defaultValue={item.description}
                render={({ field }) => (
                  <Input {...field} placeholder="Descrição" />
                )}
              />
              {errors.description && <span>{errors.description.message}</span>}

              <Controller
                name="expiration"
                control={control}
                defaultValue={item.expiration}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="date"
                    placeholder="Data de Expiração"
                  />
                )}
              />
              {errors.expiration && <span>{errors.expiration.message}</span>}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" type="submit">
                Salvar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
