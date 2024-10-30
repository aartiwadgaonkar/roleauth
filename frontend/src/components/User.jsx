import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, getUser, updateUser } from "../redux/actions/userAction";

const Users = () => {
  const { error, loading, addUser, userdata } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [users, setUsers] = useState({ username: "", password: "" });
  const [userList, setUserList] = useState([]);
 
  const [editingUserId, setEditingUserId] = useState(null);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (userdata) {
      setUserList(userdata); 
    }
  }, [userdata]);

  const handleAddUser = async (e) => {
    e.preventDefault();
  
    try {
      dispatch(createUser(users));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (user) => {
    setUsers({ username: user.username, password: "" });
    setEditingUserId(user._id);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (editingUserId) {
      dispatch(updateUser({ ...users, _id: editingUserId }));
      setEditingUserId(null); 
      setUsers({ username: "", password: "" }); 
    }
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };
  return (
    <div className="container">
      <h2>Users</h2>
      <form onSubmit={editingUserId ? handleUpdateUser : handleAddUser}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={users.username}
            onChange={(e) => setUsers({ ...users, username: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={users.password}
            onChange={(e) => setUsers({ ...users, password: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingUserId ? "Update User" : "Add User"}
        </button>
      </form>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {JSON.stringify(userList)}
          {userList &&
            userList.map((user) => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleEditClick(user)}
                    className="btn btn-warning btn-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
