import React, { useEffect, useState } from "react";
import { itemAPI } from "../utils/APIs";

const ItemTable = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [monthly, setMonthly] = useState("");
  const [cpu, setCpu] = useState("");
  const [ram, setRam] = useState("");
  const [drive, setDrive] = useState("");
  const [card, setCard] = useState("");
  const [screen, setScreen] = useState("");
  const [camera, setCamera] = useState("");
  const [port, setPort] = useState("");
  const [weight, setWeight] = useState("");
  const [system, setSystem] = useState("");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await itemAPI.get("/");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault(); // Ngăn reload trang
    
    if (!name || !price || !cpu || !ram) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    try {
      const response = await itemAPI.post("/", { name, price, cpu, ram });
      setItems([...items, response.data]); // Thêm item mới vào danh sách
      setName("");
      setPrice("");
      setCpu("");
      setRam("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div>
      <h2>Item List</h2>

      {/* Form thêm item */}
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          placeholder="Tên Laptop"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Giá"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Trả góp"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="CPU"
          value={cpu}
          onChange={(e) => setCpu(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="RAM"
          value={ram}
          onChange={(e) => setRam(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="phần cứng"
          value={drive}
          onChange={(e) => setDrive(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Card đồ họa"
          value={card}
          onChange={(e) => setCard(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Màn hình"
          value={screen}
          onChange={(e) => setScreen(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Camere"
          value={camera}
          onChange={(e) => setCamera(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nặng"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Hệ điều hành"
          value={system}
          onChange={(e) => setSystem(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="RAM"
          value={ram}
          onChange={(e) => setRam(e.target.value)}
          required
        />
        <button type="submit">Thêm Item</button>
      </form>

      {/* Bảng danh sách item */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá trị</th>
            <th>Trả góp</th>
            <th>Tồn kho</th>
            <th>CPU</th>
            <th>RAM</th>
            <th>Ổ cứng</th>
            <th>Card đồ họa</th>
            <th>Màn hình</th>
            <th>Camera</th>
            <th>Cổng kết nối</th>
            <th>Độ nặng</th>
            <th>Hệ điều hành</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.monthly}</td>
              <td>{item.remain}</td>
              <td>{item.cpu}</td>
              <td>{item.ram}</td>
              <td>{item.drive}</td>
              <td>{item.card}</td>
              <td>{item.screen}</td>
              <td>{item.camera}</td>
              <td>{item.port}</td>
              <td>{item.weight}</td>
              <td>{item.system}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
