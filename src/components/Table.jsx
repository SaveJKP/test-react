import { DeleteData, FetchDataUser, AddData } from "../utils/fetchData";
import { useState, useEffect } from "react";

export default function Table({ isOpen }) {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  async function fetchDataUser() {
    setUsers(await FetchDataUser());
  }

  useEffect(() => {
    fetchDataUser();
  }, []);

  async function addData() {
    const payload = { name, lastname, position };
    await AddData(payload);
    fetchDataUser();
  }

  const save = async () => {
    await addData();
    fetchDataUser();
  };

  const remove = async (item) => {
    await DeleteData(item);
    fetchDataUser();
  };


  return (
    <>
      {isOpen && (
        <>
          <h2 className="text-2xl font-bold">Create User Here</h2>
          <div className="flex flex-row items-center justify-center space-x-5">
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <input
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
            />
            <input
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Position"
            />
            <button onClick={save} className="bg-blue-700">
              Save
            </button>
          </div>
        </>
      )}
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
        <tbody >
          {users.map((user) => (
            <tr key={user.id}>
              <td className="td">{user.name}</td>
              <td className="td">{user.lastname}</td>
              <td className="td">{user.position}</td>
              {isOpen && (
                <td className="flex items-center justify-center">
                  <button onClick={() => remove(user)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
