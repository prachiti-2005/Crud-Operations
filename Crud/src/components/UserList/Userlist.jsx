import "./Userlist.css";

function UserList({ users, onEdit, onDelete }) {

    const handleDelete = (user) => {
    const sure = window.confirm(
      `Are you sure you want to delete "${user.name}"?`
    );
    if (sure) {
      onDelete(user.id);
    }
  };

  if (users.length === 0) {
    return <p className="user-list-empty">No records yet. Add one above.</p>;
  }

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li className="user-item" key={user.id}>
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
          </div>
          <div className="user-actions">
            <button
              className="user-btn user-btn-edit"
              onClick={() => onEdit(user)}
            >
              Edit
            </button>
            <button
              className="user-btn user-btn-delete"
              onClick={() => handleDelete(user)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default UserList;