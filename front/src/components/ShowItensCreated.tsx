import { useEffect, useState, useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { api } from "../services/api";
import { PregaoContext } from "../contexts/PregaoContext";

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

export const ShowItemsCreated = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { setInProgressPregao } = useContext<any>(PregaoContext);

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    const getInsumos = async () => {
      const response = await api.get(`/pregao/user/created/${userId}`);
      console.log(response);
      setItems(response.data);
    };
    getInsumos();
  }, []);

  const handleInProgress = async (id: number) => {
    await setInProgressPregao(id);
    const userId = localStorage.getItem("@USERID");
    const response = await api.get(`/pregao/user/created/${userId}`);
    setItems(response.data);
  };
  const handleDeleteClick = (id: number) => {};
  const handleEditClick = (id: number) => {};

  const filteredItems = items.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TextField
        label="Search Item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "16px" }}
      />
      <Button variant="outlined">Criar e finalizar todas</Button>
      {filteredItems.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Item Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Expiration</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredItems.map((item: Item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.item_name}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell
                    style={{
                      maxWidth: "300px",
                      fontSize: "12px",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    {item.description}
                  </TableCell>
                  <TableCell>{item.expiration}</TableCell>
                  <TableCell
                    style={{
                      maxWidth: "300px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      onClick={() => handleInProgress(item.id)}
                    >
                      Iniciar pregão
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleEditClick(item.id)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      Apagar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>No items found.</p>
      )}
    </>
  );
};
