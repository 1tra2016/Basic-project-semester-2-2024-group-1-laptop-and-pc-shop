import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAPI, itemAPI } from "../APIs/APIs";
import '../css/Dangnhap.css'
import Myheader from "./Myheader";
import Footer from "./Footer";

function Dangky({onLogin}){
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [numberphone, setNumberphone] = useState(null);
  const navigate = useNavigate();

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

    if(!email){
      alert("thiếu email")
    }
    if(!password){
      alert("thiếu pass")
    }
    if(!name){
      alert("thiếu tên")
    }
    if(!numberphone){
      alert("thiếu SDT")
    }
    
  
    // Kiểm tra email đã tồn tại chưa
    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      alert("Email đã tồn tại, không thể tạo tài khoản!");
      return;
    }
    
    try {
      await userAPI.post("/", { name, numberphone, email, password });
      localStorage.setItem("user", JSON.stringify({
        email: email,
        name: name
      }));
      alert("Đăng ký thành công!")
      onLogin(users)
      navigate("/");

    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
    return (
        <div>
            <Myheader/>
            <div className="s1">
              <p>
                <a href="/">Trang chủ</a> / Đăng Ký
              </p>
            </div>
            <div className="dangnhap1">
              <form className="dangnhap" onSubmit={handleAddUser}>
                <h1>Đăng Ký Tài Khoản</h1>
                <p>
                  Bạn đã có tài khoản ? <a href="/Dangnhap">Đăng nhập tại đây</a>
                </p>
                <input
                  type="text"
                  placeholder="Tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  value={numberphone}
                  onChange={(e) => setNumberphone(e.target.value)}
                  required
                />
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
                <button className="button">Đăng Ký</button>
                <p>
                  Quên mật khẩu?
                  <a href="#"> Nhấn vào đây</a>
                </p>
                <div className="social">
                  <a href="">
                    <i
                      className="fab fa-facebook"
                      style={{
                        color: "#3b5998",
                        fontSize: "48px",
                      }}
                    />
                  </a>
                  <a href="">
                    <i
                      className="fab fa-google"
                      style={{
                        color: "#de5246",
                        fontSize: "48px",
                      }}
                    />
                  </a>
                </div>
              </form>
            </div>
            <Footer/>
        </div>
    );
}
export default Dangky;