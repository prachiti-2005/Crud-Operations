import { useState, useEffect } from "react";
import "./Userform.css";

function UserForm({ editingUser, onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    onSubmit({ name: name.trim(), email: email.trim() });
    setName("");
    setEmail("");
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        className="user-form-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="user-form-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="user-form-buttons">
        <button className="user-form-btn" type="submit">
          {editingUser ? "Update" : "Add"}
        </button>
        {editingUser && (
          <button
            className="user-form-btn user-form-btn-cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default UserForm;