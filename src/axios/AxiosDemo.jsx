import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosDemo() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const [editId, setEditId] = useState(null);
  const [editInput, setEditInput] = useState("");

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3001/users");
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async () => {
    if (!name) return;

    await axios.post("http://localhost:3001/users", {
      name: name,
    });

    setName("");
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    fetchUsers();
  };

  const editUser = async (id) => {
    if (!editInput) return;

    await axios.patch(`http://localhost:3001/users/${id}`, {
      name: editInput,
    });

    setEditId(null);
    setEditInput("");
    fetchUsers();
  };

  return (
    <div>
      <h1>Axios Demo</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addUser}>Add User</button>

      <hr />

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>

          <button onClick={() => deleteUser(user.id)}>
            Delete
          </button>

          <button
            onClick={() => {
              setEditId(user.id);
              setEditInput(user.name);
            }}
          >
            Edit
          </button>

          {
            editId === user.id ? (
              <>
                <input
                  type="text"
                  value={editInput}
                  onChange={(e) => setEditInput(e.target.value)}
                />

                <button onClick={() => editUser(user.id)}>
                  Submit
                </button>
              </>
            ) : null
          }

          <hr />
        </div>
      ))}
    </div>
  );
}