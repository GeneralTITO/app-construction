import React, { useEffect, useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { api } from "../services/api";

interface Item {
  id: number;
  item_name: string;
  amount: string;
  description: string;
  expiration: string;
  status: string; // Add the "status" field to the Item interface
  createdAt: string;
  updatedAt: string;
}

export const ShowItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    const getInsumos = async () => {
      const response = await api.get(`/pregao/user/${userId}`);
      console.log(response);
      setItems(response.data);
    };
    getInsumos();
  }, []);

  const handleEditClick = (itemId: number) => {
    setSelectedItemId(itemId);
  };

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
                <TableCell>Status</TableCell> {/* Add the Status column */}
                <TableCell>Created At</TableCell>
                <TableCell>Updated At</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredItems.map((item: Item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.item_name}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.expiration}</TableCell>
                  <TableCell>{item.status}</TableCell> {/* Render the Status */}
                  <TableCell>{item.createdAt}</TableCell>
                  <TableCell>{item.updatedAt}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleEditClick(item.id)}>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon />
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
      {selectedItemId && <div>{/* Formulário de edição */}</div>}
    </>
  );
};
