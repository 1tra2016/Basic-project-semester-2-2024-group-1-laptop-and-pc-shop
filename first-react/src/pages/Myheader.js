import './../css/header.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
function Myheader(){
    const [isVisible, setIsVisible] = useState(true);

    function cart(){
        const cart = document.querySelector('.hidden');
        if (!isVisible){
          cart.style.display="none";
          setIsVisible(!isVisible);
        }
        if (isVisible){
          cart.style.display='block';
          setIsVisible(!isVisible);
        }
    }
    function noncart(event){
        event.stopPropagation();
    }
    return(
      <div>
        <div className='headerFake'></div>
        <header id='header-all'>

            <div className="header-banner">
                    <img alt="Khuyến mãi đặc biệt" src="./images/top_banner.webp" />
            </div>
            <div className='header'>
              <div className='logo'>
                  <a href='/'> <img id='logo' alt='Logo' src='./images/pnk1.jpg'></img></a>
                </div>
              <div className='main-header'>
                <div className="top-header">
                  <div className="left-top-header">
                    <form>
                        <input type="text" placeholder="Tìm kiếm sản phẩm..."></input>
                        <button type="submit"><i className="fas fa-search"></i> Tìm</button>
                    </form>
                  </div>
                  <div className="right-top-header">
                    <a href="./Dangnhap" className="login-btn"><i className="fas fa-user"></i> Đăng nhập</a>
                    <a href="#" onClick={cart} className="cart-btn open-cart-btn"><i className="fas fa-shopping-cart" style={{color: "#74C0FC",}}></i> Giỏ hàng</a>
                  </div>
                </div>
                <div className="bottom-header">
                  <div className="left-bottom-header">
                    <a href="#promotions" className="nav-link">Khuyến mãi</a>
                    <a href="tintuc.html" className="nav-link">Tin tức</a>
                    <a href="#contact"    className="nav-link">Liên hệ</a>
                    <a href="#order-check"className="nav-link">Kiểm tra đơn hàng</a>
                  </div>
                  <div className="right-bottom-header">
                    <a href='./DanhmucSanpham' className="nav-link">
                      <i className="fas fa-bars"></i>
                      <span>  Danh mục sản phẩm</span>
                    </a>
                    <a href="#hotline" className="nav-link">
                      <i className="fas fa-phone-alt"></i>
                      <span> Hotline: 0123404953</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-overlay hidden" onClick={cart}>
              <div className="cart" onClick={noncart}>
                <h2>Giỏ hàng</h2>
                <img src="./images/cartempty.png" alt="Empty Cart"></img>
                <br></br>
                <p className="cart-empty-text">Giỏ hàng chưa có gì!</p>
                <p>Hãy tìm sản phẩm ưng ý và thêm vào giỏ hàng bạn nhé</p>
                <br></br>
                <a href="./DanhmucSanpham">Tiếp tục mua sắm</a> 
              </div>
            </div>
        </header>
      </div>
    );
};
export default Myheader;