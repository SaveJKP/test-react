import { fetchDataUser } from "../utils/FetchData";
import { useState, useEffect } from "react";

export default function Table() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const clearForm = () => {
    setName("");
    setLastName("");
    setPosition("");
  };

  useEffect(() => {
    async function loadData() {
      setUsers(await fetchDataUser());
    }
    loadData();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold">Create User Here</h2>
      <div className="flex flex-row items-center justify-center space-x-5">
        <input placeholder="Name" />
        <input placeholder="Last Name" />
        <input placeholder="Position" />
        <button className="bg-blue-700">Save</button>
      </div>
      <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Last Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Position
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="td">{user.name}</td>
              <td className="td">{user.lastname}</td>
              <td className="td">{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
