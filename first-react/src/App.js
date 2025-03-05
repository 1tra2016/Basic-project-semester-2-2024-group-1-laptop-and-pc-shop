
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DanhmucSanpham from "./pages/DanhmucSanpham";
import Dangnhap from "./pages/Dangnhap";
import Dangky from "./pages/Dangky";
import ChitietSanpham from "./pages/ChitietSanpham";
import UserTable from "./pages/UserTable";
const App=() => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/DanhmucSanpham" element={<DanhmucSanpham />} />
        <Route path="/Dangnhap" element={<Dangnhap />} />
        <Route path="/Dangky" element={<Dangky />} />
        <Route path="/ChitietSanpham" element={<ChitietSanpham />} />
      </Routes>
    </Router>
   );
 }
 
 export default App;


