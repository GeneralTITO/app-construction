import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { api } from "../services/api";

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

export const ShowItems = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    const getInsumos = async () => {
      const response = await api.get(`/pregao/user/${userId}`);
      setItems(response.data);
    };
    getInsumos();
  }, []);

  const filteredItems = items.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search Item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded px-2 py-1 mb-4"
      />
      {filteredItems.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr>
                <th>ID</th>
                <th>Item Name</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Expiration</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item: Item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.item_name}</td>
                  <td>{item.amount}</td>
                  <td>{item.description}</td>
                  <td>{item.expiration}</td>
                  <td>{item.status}</td>
                  <td>{item.createdAt}</td>
                  <td>{item.updatedAt}</td>
                  <td>
                    <button className="text-blue-500">
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};
