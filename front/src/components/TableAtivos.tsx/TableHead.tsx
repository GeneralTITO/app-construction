import { Table, Thead, Tr, Th, Tbody, Box } from "@chakra-ui/react";

import { TableRowAtivos } from "./TableRow";

interface Item {
  id: number;
  item_name: string;
  amount: string;
  description: string;
  expiration: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface TableProps {
  items: Item[];
}

export const ItemsTableAtivos: React.FC<TableProps> = ({ items }) => {
  return (
    <Box overflowX="auto">
      <Table variant="striped" colorScheme="blue" size="sm">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Nome do Item</Th>
            <Th>Quantidade</Th>
            <Th>Descrição</Th>
            <Th>Data de Expiração</Th>
            <Th>Ações</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item) => (
            <TableRowAtivos key={item.id} item={item} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
