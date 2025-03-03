import React from "react";
import '../css/Dangnhap.css'
import Myheader from "./Myheader";
import Footer from "./Footer";
function Dangnhap(){
    return (
        <div>
            <Myheader/>
            <div className="s1">
              <p>
                <a href="/">Trang chủ</a> / Đăng Nhập
              </p>
            </div>
            <div className="dangnhap1">
              <div className="dangnhap">
                <h1>Đăng nhập tài khoản</h1>
                <p>
                  Bạn chưa có tài khoản ? <a href="./Dangky">Đăng ký tại đây</a>
                </p>
                <input placeholder="Email" type="email" />
                <input placeholder="Mật khẩu" type="password" />
                <button className="button">Đăng nhập</button>
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
export default Dangnhap;