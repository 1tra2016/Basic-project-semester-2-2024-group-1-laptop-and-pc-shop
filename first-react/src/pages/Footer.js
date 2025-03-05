import './../css/Fooder.css';
import React from 'react';

function Footer(){
  
    return(
        <footer>
            <div className="top">
              <img alt="Logo" className="logo" src="./images/pnk2.webp" />
              <div className="website">
                <h4>Về chúng tôi</h4>
                <ul>
                  <li>
                    <a href="#">Cách thanh toán</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ chúng tôi</a>
                  </li>
                  <li>
                    <a href="#">Trợ giúp</a>
                  </li>
                  <li>
                    <a href="#">Tuyển dụng</a>
                  </li>
                  <li>
                    <a href="#">Tính năng mới</a>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h4>Theo dõi thêm</h4>
                <ul>
                  <li>
                    <a href="#">Phenikaa</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                  <li>
                    <a href="#">Tiktok</a>
                  </li>
                  <li>
                    <a href="#">Pornhub</a>
                  </li>
                </ul>
              </div>
              <div className="other">
                <h4> Khác</h4>
                <ul>
                  <li>
                    <a href="#">Chính sách quyền riêng tư</a>
                  </li>
                  <li>
                    <a href="#">Điều khoản & Điều kiện</a>
                  </li>
                  <li>
                    <a href="#">Quy chế hoạt động</a>
                  </li>
                  <li>
                    <a href="#">Liên kết ngân hàng</a>
                  </li>
                  <li>
                    <a href="#">Báo cáo </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright">
              <small>
                Công ty vô vàn trách nhiệm 2 thành viên. Tòa nhà chọc trời, P. Yên Nghĩa,
                Q. Hà Đông, TP Hà Nội
              </small>
              <h4>Copyright © 2025. All rights has not reserved</h4>
            </div>
        </footer>
    );
} 
export default Footer;