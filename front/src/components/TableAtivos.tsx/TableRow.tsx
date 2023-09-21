import {
  Button,
  Flex,
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
import { Item, PregaoContext } from "../../contexts/PregaoContext";
import { useContext } from "react";

interface TableProps {
  item: Item;
}

export const TableRowAtivos = ({ item }: TableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { deletePregao }: any = useContext(PregaoContext);

  const handleDelete = () => {
    onOpen();
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
            <Button>ver ofertas</Button>
            <Button onClick={() => handleDelete()}>
              <AiOutlineDelete />
            </Button>
          </Flex>
        </Td>
      </Tr>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>Tem certeza que deseja excluir esse pregão?</ModalBody>
          <ModalFooter gap={2}>
            <Button colorScheme="blue" onClick={() => deletePregao(item.id)}>
              Sim
            </Button>
            <Button colorScheme="blue" onClick={() => onClose()}>
              Não
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
