import { useEffect, useState } from "react";
import userAPI from "../APIs/testAPI"; // Import API đã tạo

function UserTable() {
  const [users, setUsers] = useState([]); // State lưu danh sách người dùng

  // Fetch dữ liệu khi component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userAPI.getAll();
        setUsers(response.data); // Lưu dữ liệu vào state
        alert("ok")
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Danh sách tài khoản</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.user}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
