import './../css/header.css';
import React, { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
function Myheader(){
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [iscart, setCart] = useState(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Chuyển từ JSON string thành object
    }
  }, []);
  useEffect(()=>{
    if(user!=null){
      if(user.cart!=null){
        setCart(true)
      }
    }
  },[user])
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
  function dangxuat(){
    alert("Đăng xuất")
    if(user=='null'){
      navigate("/")
    }
    else{
      localStorage.removeItem("user"); // Xóa thông tin đăng nhập
      navigate("/Dangnhap"); // Quay về trang đăng nhập
    }
  }
  function check_cart() {

    if (!user || !user.cart || user.cart.length === 0) {
        alert("Cart rỗng");
        return;
    }

    // Duyệt qua từng sản phẩm trong giỏ hàng
    user.cart.forEach(item => {
        alert(`Sản phẩm ID: ${item.id}, Số lượng: ${item.number}`);
    });
  }


  return(
    <div>
      <div className='headerFake'></div>
      <header id='header-all'>
          <div className="header-banner">
                  <img alt="Khuyến mãi đặc biệt" src="../images/top_banner.webp" />
          </div>
          <div className='header'>
            <div className='logo'>
                <a href='/'> <img id='logo' alt='Logo' src='../images/pnk1.jpg'></img></a>
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
                <a 
                  href="#" 
                  onClick={user ? dangxuat : () => navigate("/Dangnhap")} 
                  className="login-btn"
                >
                  <i className="fas fa-user"></i> {user ? "Đăng xuất" : "Đăng nhập"}
                </a>
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
                  <a href='/DanhmucSanpham' className="nav-link">
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
              {user ? (
                <p>Xin chào, {user.name}!</p>
              ) : (
                <p>Bạn chưa đăng nhập</p>
              )}
              
              {iscart==true ? (
                <div className="sub">
                  <img onClick={check_cart} src="../images/cart_item.jpg" alt="Cart not Empty"></img>
                  <br></br>
                  <a href="#" id="button" >Xem giỏ hàng</a>
                </div>
              ): (
                <div>
                  <img onClick={check_cart} src="../images/cart_no_item.jpg" alt="Empty Cart"></img>
                  <br></br>
                  <p className="cart-empty-text">Giỏ hàng chưa có gì!</p>
                  <p>Hãy tìm sản phẩm ưng ý và <br></br> thêm vào giỏ hàng bạn nhé</p>
                </div>
              )}
              <br></br>
              <a id="button" href="/DanhmucSanpham">Tiếp tục mua sắm</a> 
            </div>
          </div>
      </header>
    </div>
  );
};
export default Myheader;