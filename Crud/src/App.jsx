import { useState } from "react";
import UserForm from "./components/UserForm/Userform.jsx";
import UserList from "./components/UserList/Userlist.jsx";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (data) => {
    setUsers([...users, { id: Date.now(), ...data }]);
  };

  const updateUser = (id, data) => {
    setUsers(users.map((u) => (u.id === id ? { ...u, ...data } : u)));
    setEditingUser(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    if (editingUser && editingUser.id === id) setEditingUser(null);
  };

  const handleSubmit = (data) => {
    if (editingUser) {
      updateUser(editingUser.id, data);
    } else {
      addUser(data);
    }
  };

  return (
    <div className="app">
      <h1 className="app-title">CRUD App</h1>
      <UserForm
        editingUser={editingUser}
        onSubmit={handleSubmit}
        onCancel={() => setEditingUser(null)}
      />
      <UserList
        users={users}
        onEdit={setEditingUser}
        onDelete={deleteUser}
      />
    </div>
  );
}

export default App;