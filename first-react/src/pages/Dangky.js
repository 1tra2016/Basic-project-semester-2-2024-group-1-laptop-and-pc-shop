import React from "react";
import '../css/Dangnhap.css'
import Myheader from "./Myheader";
import Footer from "./Footer";
function Dangky(){
    return (
        <div>
            <Myheader/>
            <div className="s1">
              <p>
                <a href="/">Trang chủ</a> / Đăng Ký
              </p>
            </div>
            <div className="dangnhap1">
              <div className="dangnhap">
                <h1>Đăng Ký Tài Khoản</h1>
                <p>
                  Bạn đã có tài khoản ? <a href="/Dangnhap">Đăng nhập tại đây</a>
                </p>
                <input placeholder="Ho" type="email" />
                <input placeholder="Ten" type="email" />
                <input placeholder="So dien thoai" type="email" />
                <input placeholder="Email" type="email" />
                <input placeholder="Mật khẩu" type="password" />
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
              </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Dangky;