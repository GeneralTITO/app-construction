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

export const ShowItemsInprogress = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const userId = localStorage.getItem("@USERID");
    const getInsumos = async () => {
      const response = await api.get(`/pregao/user/inprogress/${userId}`);
      setItems(response.data);
    };
    getInsumos();
  }, []);

  const filteredItems = items.filter((item) =>
    item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search Item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      {filteredItems.length > 0 ? (
        <div className="max-h-[700px] overflow-y-scroll w-[1300px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Item Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Updated At
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredItems.map((item: Item) => (
                <tr key={item.id}>
                  <td className="px-3 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.item_name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-pre-wrap">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.expiration}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.updatedAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="p-2">
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
    </>
  );
};