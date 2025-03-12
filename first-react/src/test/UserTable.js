import React, { useEffect, useState } from "react";
import { userAPI } from "../APIs/APIs";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [numberphone, setNumberphone] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userAPI.get("/");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault(); // Ngăn reload trang
    
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
  
    // Kiểm tra email đã tồn tại chưa
    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      alert("Email đã tồn tại, không thể tạo tài khoản!");
      return;
    }
  
    try {
      const response = await userAPI.post("/", {name, numberphone, email, password });
      setUsers([...users, response.data]); // Thêm user mới vào danh sách
      setEmail(""); // Reset input
      setPassword("");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  

  return (
    <div>
      <h2>User List</h2>

      {/* Form thêm user */}
      <form onSubmit={handleAddUser}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Số điẹne thoại"
          value={numberphone}
          onChange={(e) => setNumberphone(e.target.value)}
          required
        />
        <button type="submit">Thêm User</button>
      </form>

      {/* Bảng danh sách user */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.numberphone}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
