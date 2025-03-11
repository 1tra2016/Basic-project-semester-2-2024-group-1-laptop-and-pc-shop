
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import DanhmucSanpham from "./pages/DanhmucSanpham";
import Dangnhap from "./pages/Dangnhap";
import Dangky from "./pages/Dangky";
import ChitietSanpham from "./pages/ChitietSanpham";
import UserTable from "./test/UserTable";
import ItemTable from "./test/ItemTable";
const App=() => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            currentUser ? (
              <Home user={currentUser} onLogout={() => setCurrentUser(null)} />
            ) : (
              <Dangnhap onLogin={setCurrentUser} />
            )
          }
        />
        <Route path="/DanhmucSanpham" element={<DanhmucSanpham />} />
        <Route path="/dangnhap" element={<Dangnhap onLogin={setCurrentUser} />} />
        <Route path="/Dangky" element={<Dangky onLogin={setCurrentUser} />} />
        <Route path="/ChitietSanpham/:id" element={<ChitietSanpham />} />
        <Route path="/UserTable" element={<UserTable />} />
        <Route path="/ItemTable" element={<ItemTable />} />
      </Routes>
    </Router>
   );
 }
 
 export default App;


