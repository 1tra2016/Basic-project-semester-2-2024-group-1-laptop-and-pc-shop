
import './../css/App.css';
import './../css/lam.css';
import './../css/binh.css';
import './../css/phi.css';
import './../css/quanmain.css';
import './../css/quanfooter.css';
import React, { useEffect, useState } from "react";
import Myheader from './Myheader'
import Footer from './Footer'

const Home = () => {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("email");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser)); // Chuyển từ JSON string thành object
  //   }
  // }, []);
  // if (!user){
  //   user.email="chưa đăng nhập"
  // }
  
  return (
    <div>
      <Myheader/>
      <main>
        <section className="main-section">
          <div className="background-blur" />
          <div className="container">
            <div className="left">
              <button className="prev-slide">
                <i className="fas fa-chevron-left" />
              </button>
              <div className="main-image-slider">
                <a href="#promo1">
                  <img alt="Siêu sale laptop gaming" src="./images/home_slider_1.webp" />
                </a>
                <a href="#promo2">
                  <img alt="Đại hạ giá màn hình 4K" src="./images/home_slider_2.webp" />
                </a>
              </div>
              <button className="next-slide">
                <i className="fas fa-chevron-right" />
              </button>
            </div>
            <div className="right">
              <a className="product" href="#laptops">
                <img alt="Laptop văn phòng" src="./images/home_side_banner_1.webp" />
              </a>
              <a className="product" href="#monitors">
                <img alt="Màn hình 4K" src="./images/home_side_banner_2.webp" />
              </a>
              <a className="product" href="#keyboards">
                <img alt="Bàn phím cơ" src="./images/home_side_banner_3.webp" />
              </a>
            </div>
          </div>
        </section>
        <section className="special-offers">
          <div className="container">
            <div className="offer">
              <i className="fas fa-motorcycle" />
              <span className="uppercase">GIAO HỎA TỐC</span>
              <span className="lowercase">Nội thành TP. HCM trong 4h</span>
              
            </div>
            <div className="offer">
              <i className="fas fa-hand-holding-usd" />
              <span className="uppercase">TRẢ GÓP ƯU ĐÃI%</span>
              <span className="lowercase">Hỗ trợ vay với lãi suất thấp</span>
            </div>
            <div className="offer">
              <i className="fas fa-bolt" />
              <span className="uppercase">DEAL HOT BÙNG NỔ</span>
              <span className="lowercase">Flash sale giảm giá cực sốc</span>
            </div>
            <div className="offer">
              <i className="fas fa-exchange-alt" />
              <span className="uppercase">MIỄN PHÍ ĐỔI TRẢ</span>
              <span className="lowercase">Trong vòng 30 ngày miễn phí</span>
            </div>
            <div className="offer">
              <i className="fas fa-headset" />
              <span className="uppercase">HỖ TRỢ 24/7</span>
              <span className="lowercase">Hỗ trợ khách hàng 24/7</span>
            </div>
          </div>
        </section>
        <section className="product-categories">
          <div className="container">
            <div className="category-grid">
              <a className="category-item" href="#laptops">
                <img alt="Laptop" src="./images/coll_1.webp" />
                <span>Laptop</span>
              </a>
              <a className="category-item" href="#gaming-laptops">
                <img alt="Máy tính gaming" src="./images/coll_2.webp" />
                <span>Gaming</span>
              </a>
              <a className="category-item" href="#phones">
                <img alt="Điện thoại" src="./images/coll_3.webp" />
                <span>Điện thoại</span>
              </a>
              <a className="category-item" href="#headphones">
                <img alt="Tai nghe" src="./images/coll_4.webp" />
                <span>Tai nghe</span>
              </a>
              <a className="category-item" href="#speakers">
                <img alt="Loa" src="./images/coll_5.webp" />
                <span>Loa</span>
              </a>
              <a className="category-item" href="#mice">
                <img alt="Chuột" src="./images/coll_6.webp" />
                <span>Chuột</span>
              </a>
              <a className="category-item" href="#keyboards">
                <img alt="Bàn phím" src="./images/coll_7.webp" />
                <span>Bàn phím</span>
              </a>
              <a className="category-item" href="#accessories">
                <img alt="Phụ kiện" src="./images/coll_8.png" />
                <span>Phụ kiện</span>
              </a>
            </div>
            <div className="category-grid">
              <a className="category-item" href="#gaming-pcs">
                <img alt="Máy tính bàn" src="./images/coll_9.webp" />
                <span>PC Gaming</span>
              </a>
              <a className="category-item" href="#monitors">
                <img alt="Màn hình" src="./images/coll_10.webp" />
                <span>Màn hình</span>
              </a>
              <a className="category-item" href="#smart-devices">
                <img alt="Thiết bị thông minh" src="./images/coll_11.png" />
                <span>Smart Home</span>
              </a>
              <a className="category-item" href="#gaming-gear">
                <img alt="Gaming Gear" src="./images/coll_12.webp" />
                <span>Gaming Gear</span>
              </a>
              <a className="category-item" href="#webcams">
                <img alt="Camera" src="./images/coll_13.webp" />
                <span>Webcam</span>
              </a>
              <a className="category-item" href="#bags">
                <img alt="Ba lô laptop" src="./images/coll_14.png" />
                <span>Ba lô</span>
              </a>
              <a className="category-item" href="#chairs">
                <img alt="Ghế gaming" src="./images/coll_15.webp" />
                <span>Ghế</span>
              </a>
              <a className="category-item" href="#cables">
                <img alt="Dây cáp" src="./images/coll_16.webp" />
                <span>Dây cáp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
        <div className="binhtongcabai">
          <div className="binhtong">
            <div className="binhtong1">
              <div className="giovang">
                <div>
                  <i className="fa-solid fa-bolt" />
                </div>
                <div className="txt1giovang">GIỜ VÀNG DEAL SỐC</div>
                <div className="box1giovang">
                  <div className="txt1box1giovang">Nhanh lên nào!</div>
                  <div className="txt2box1giovang">Sự kiện sẽ kết thúc sau</div>
                </div>
                <div className="boxclock">
                  <div className="clock">
                    <div className="font-clock">
                      <div id="hour">09</div>
                      <p>Giờ</p>
                    </div>
                  </div>
                  <div className="clock">
                    <div className="front-clock">
                      <div id="minute">00</div>
                      <p>Phút</p>
                    </div>
                  </div>
                  <div className="clock">
                    <div className="font-clock">
                      <div id="second">00</div>
                      <p>Giây</p>
                    </div>
                  </div>
                </div>
                <script src="./images/binh.js" />
              </div>
            </div>
            <div className="binhtong2">
              <div className="binhtong2-1">
                <div
                  className="boxbinhtong2-1"
                  title="Laptop Gaming Acer Nitro 5 Tiger AN515-58-52SP">
                  <a href="">
                    <div className="binh1">
                      <img alt="" src="./images/binh1.jpg" />
                    </div>
                    <div className="txt1boxbinhtong2-1">
                      Laptop Gaming Acer Nitro 5 Tiger AN515-58-52SP
                    </div>
                    <div className="boxbinhdanhgia">
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div className="txtboxbinhdanhgia">0 đánh giá</div>
                    </div>
                    <div className="boxbinhgia">
                      <div className="boxbinhgia1">
                        <div className="txt1boxbinhgia1">20,990,000₫</div>
                        <div className="txt2boxbinhgia1">27,990,000₫</div>
                      </div>
                      <div className="boxbinhgia2">
                        <div className="txt1boxbinhgia2">-25%</div>
                      </div>
                    </div>
                    <div className="binhradio">
                      <div>
                        <img alt="" src="./images/binhden.jpg" title="Đen" />
                      </div>
                      <div>
                        <img alt="" src="./images/binhhong.jpg" title="Hồng" />
                      </div>
                      <div>
                        <img alt="" src="./images/binhtrang.jpg" title="Trắng" />
                      </div>
                      <div className="txtbinhradio">+3</div>
                    </div>
                    <div className="txtduoiradio">Chỉ còn 6 sản phẩm</div>
                    <div className="borderboxbinhtong2-1" />
                    <div className="binhtuychon1">
                      <div className="txtbinhtuychon1">Tùy chọn</div>
                    </div>
                  </a>
                </div>
                <div
                  className="boxbinhtong2-1"
                  title="Laptop Dell XPS 13 Plus 9320-5CG56">
                  <a href="">
                    <div className="binh2">
                      <img alt="" src="./images/binh2.jpg" />
                    </div>
                    <div className="txt1boxbinhtong2-1">
                      Laptop Dell XPS 13 Plus 9320-5CG56
                    </div>
                    <div className="boxbinhdanhgia">
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div className="txtboxbinhdanhgia">0 đánh giá</div>
                    </div>
                    <div className="boxbinhgia">
                      <div className="boxbinhgia1">
                        <div className="txt1boxbinhgia1">49,990,000₫</div>
                        <div className="txt2boxbinhgia1">58,990,000₫</div>
                      </div>
                      <div className="boxbinhgia2">
                        <div className="txt1boxbinhgia2">-27%</div>
                      </div>
                    </div>
                    <div className="binhradio">
                      <div>
                        <img alt="" src="./images/binhhong.jpg" title="Hồng" />
                      </div>
                      <div>
                        <img alt="" src="./images/binhxanh.jpg" title="Xanh" />
                      </div>
                      <div>
                        <img alt="" src="./images/binhtrang.jpg" title="Trắng" />
                      </div>
                      <div className="txtbinhradio">+2</div>
                    </div>
                    <div className="txtduoiradio">Chỉ còn 4 sản phẩm</div>
                    <div className="borderboxbinhtong2-1" />
                    <div className="binhtuychon1">
                      <div className="txtbinhtuychon1">Tùy chọn</div>
                    </div>
                  </a>
                </div>
                <div
                  className="boxbinhtong2-1"
                  title="MacBook Pro 14 (M2 Pro/10-core CPU/16-core GPU/16GB/512GB)">
                  <a href="">
                    <div className="binh3">
                      <img alt="" src="./images/binh3.jpg" />
                    </div>
                    <div className="txt1boxbinhtong2-1">
                      MacBook Pro 14" (M2 Pro/10-core CPU/16-core GPU/16GB/512GB)
                    </div>
                    <div className="boxbinhdanhgia">
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div className="txtboxbinhdanhgia">0 đánh giá</div>
                    </div>
                    <div className="boxbinhgia">
                      <div className="boxbinhgia1">
                        <div className="txt1boxbinhgia1">46,590,000₫</div>
                        <div className="txt2boxbinhgia1">55,000,000₫</div>
                      </div>
                      <div className="boxbinhgia2">
                        <div className="txt1boxbinhgia2">-23%</div>
                      </div>
                    </div>
                    <div className="binhradio">
                      <div>
                        <img alt="" src="./images/binhhong.jpg" title="Hồng" />
                      </div>
                      <div>
                        <img alt="" src="./images/binhtrang.jpg" title="Trắng" />
                      </div>
                      <div>
                        <img alt="" src="./images/binhden.jpg" title="Đen" />
                      </div>
                      <div className="txtbinhradio">+1</div>
                    </div>
                    <div className="txtduoiradio">Chỉ còn 3 sản phẩm</div>
                    <div className="borderboxbinhtong2-1" />
                    <div className="binhtuychon1">
                      <div className="txtbinhtuychon1">Tùy chọn</div>
                    </div>
                  </a>
                </div>
                <div
                  className="boxbinhtong2-1"
                  title="MacBook Pro 16 (M2 Pro/12-core CPU/19-core GPU/16GB/512GB)">
                  <a href="">
                    <div className="binh4">
                      <img alt="" src="./images/binh4.jpg" />
                    </div>
                    <div className="txt1boxbinhtong2-1">
                      MacBook Pro 16" (M2 Pro/12-core CPU/19-core GPU/16GB/512GB)
                    </div>
                    <div className="boxbinhdanhgia">
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div className="txtboxbinhdanhgia">0 đánh giá</div>
                    </div>
                    <div className="boxbinhgia">
                      <div className="boxbinhgia1">
                        <div className="txt1boxbinhgia1">56,990,000₫</div>
                        <div className="txt2boxbinhgia1">65,000,000₫</div>
                      </div>
                      <div className="boxbinhgia2">
                        <div className="txt1boxbinhgia2">-25%</div>
                      </div>
                    </div>
                    <div className="binhradio">
                      <div>
                        <img alt="" src="./images/binhden.jpg" title="Đen" />
                      </div>
                      <div>
                        <img alt="" src="./images/binhxanh.jpg" title="Xanh" />
                      </div>
                      <div>
                        <img alt="" src="./images/binhtrang.jpg" title="Trắng" />
                      </div>
                      <div className="txtbinhradio">+2</div>
                    </div>
                    <div className="txtduoiradio">Chỉ còn 4 sản phẩm</div>
                    <div className="borderboxbinhtong2-1" />
                    <div className="binhtuychon1">
                      <div className="txtbinhtuychon1">Tùy chọn</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="binhtongtiep">
            <div className="binhtong3">
              <div className="binhmagg">
                <div className="binhmagg1">
                  <div className="txtbinhmgg1">
                    <div className="txt1binhmagg1">Mã: EGA50THANG10</div>
                    <div className="txt2binhmagg1">HSD: 28/01/2024</div>
                  </div>
                  <div className="txt3binhmagg1">
                    Giảm 15% cho đơn hàng giá trị tối thiểu 500K. Mã giảm tối đa 250K
                  </div>
                  <div className="borderbinhmgg" />
                  <div className="btnbinhmagg">
                    <a href="">
                      <div className="btnbinhmagg1">Điều kiện</div>
                    </a>
                    <a href="">
                      <div className="btnbinhmagg2">Hết hạn</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="binhmagg">
                <div className="binhmagg1">
                  <div className="txtbinhmgg1">
                    <div className="txt1binhmagg1">Mã: EGA30THANG10</div>
                    <div className="txt2binhmagg1">HSD: 20/02/2024</div>
                  </div>
                  <div className="txt3binhmagg1">
                    Giảm 15% cho đơn hàng giá trị tối thiểu 500K. Mã giảm tối đa 250K
                  </div>
                  <div className="borderbinhmgg" />
                  <div className="btnbinhmagg">
                    <a href="">
                      <div className="btnbinhmagg1">Điều kiện</div>
                    </a>
                    <a href="">
                      <div className="btnbinhmagg2">Hết hạn</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="binhmagg">
                <div className="binhmagg1">
                  <div className="txtbinhmgg1">
                    <div className="txt1binhmagg1">Mã: FREESHIPNGAY</div>
                    <div className="txt2binhmagg1">HSD: 30/12/2023</div>
                  </div>
                  <div className="txt3binhmagg1">
                    Mã giảm 99K cho đơn hàng tối thiểu 1 triệu. Tối đa 1 mã giảm
                    giá/đơn hàng.
                  </div>
                  <div className="borderbinhmgg" />
                  <div className="btnbinhmagg">
                    <a href="">
                      <div className="btnbinhmagg1">Điều kiện</div>
                    </a>
                    <a href="">
                      <div className="btnbinhmagg2">Hết hạn</div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="binhmagg">
                <div className="binhmagg1">
                  <div className="txtbinhmgg1">
                    <div className="txt1binhmagg1">Mã: EG500KTHANG7</div>
                    <div className="txt2binhmagg1">HSD: 30/07/2024</div>
                  </div>
                  <div className="txt3binhmagg1">
                    Miễn phí vận chuyển cho đơn hàng từ 500k. Áp dụng cho khu vực
                    Tp.HCM
                  </div>
                  <div className="borderbinhmgg" />
                  <div className="btnbinhmagg">
                    <a href="">
                      <div className="btnbinhmagg1">Điều kiện</div>
                    </a>
                    <a href="">
                      <div className="btnbinhmagg3">Sao chép</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="binhtong4">
              <div className="binhtong4-1">
                <div className="binhthanhtiktok">
                  <a href="">
                    <div className="binhthanhtiktok1">
                      <img alt="" src="./images/binhlogotiktok.jpg" />
                    </div>
                  </a>
                  <div className="binhthanhtiktok2">
                    <div className="binhthanhtiktok2-1">
                      <a href="">#workstation</a>
                    </div>
                    <div className="binhthanhtiktok2-2">
                      <a href="">32.1k bài đăng</a>
                    </div>
                  </div>
                </div>
                <div className="binhvideotiktok">
                  <a href="">
                    <img alt="" src="./images/binhqc1.jpg" />
                  </a>
                  <a href="">
                    <img alt="" src="./images/binhqc2.jpg" />
                  </a>
                  <a href="">
                    <img alt="" src="./images/binhqc3.jpg" />
                  </a>
                  <a href="">
                    <img alt="" src="./images/binhqc4.jpg" />
                  </a>
                </div>
                <div className="binhthanhduoitiktok">
                  <div className="binhthanhduoitiktok1">
                    <div className="binhthanhduoitiktok1-1">
                      <img alt="" src="./images/binhqc5.jpg" />
                    </div>
                    <a href="https://www.tiktok.com/legal/page/row/privacy-policy/vi">
                      <div className="binhthanhduoitiktok1-2">
                        Xem Chính sách Quyền riêng tư
                      </div>
                    </a>
                  </div>
                  <div className="binhthanhduoitiktok2">
                    <a href="">
                      <div className="txtbinhthanhduoitiktok2">Mở TikTok</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="binhtongtiep1">
            <div className="binhtong5">
              <div className="binhspbanchay1">
                <a href="">
                  <div className="txtbinhspbanchay1">Gợi ý hôm nay</div>
                </a>
              </div>
              <div className="binhspbanchay2">
                <a href="">
                  <div className="txtbinhspbanchay3">● Máy chơi game</div>
                </a>
              </div>
              <div className="binhspbanchay3">
                <a href="">
                  <div className="txtbinhspbanchay2">● Máy tính laptop</div>
                </a>
              </div>
              <div className="binhspbanchay3">
                <a href="">
                  <div className="txtbinhspbanchay3">● Tai nghe</div>
                </a>
              </div>
              <div className="binhspbanchay4">
                <a href="">
                  <div className="txtbinhspbanchay4">{`Xem thêm >`}</div>
                </a>
              </div>
            </div>
            <div className="binhtong6">
              <div className="box1binhtong6">
                <div className="binhcuoi1">
                  <img alt="" src="./images/binht4.jpg" />
                </div>
                <div className="txtbinhcuoi1">
                  <a href="">
                    <div className="txt1boxbinhtong2-1">
                      Laptop ASUS Vivobook Go 14 E1404FA-NK186W
                    </div>
                    <div className="boxbinhdanhgia">
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div className="txtboxbinhdanhgia">0 đánh giá</div>
                    </div>
                    <div className="boxbinhgia">
                      <div className="boxbinhgia1">
                        <div className="txt1boxbinhgia1">12,190,000₫</div>
                        <div className="txt2boxbinhgia1">20,990,000₫</div>
                      </div>
                      <div className="boxbinhgia2">
                        <div className="txt1boxbinhgia2">-30%</div>
                      </div>
                    </div>
                    <div className="binhtuychon2">
                      <div className="txtbinhtuychon2">Thêm vào giỏ</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box1binhtong6">
                <div className="binhcuoi2">
                  <img alt="" src="./images/binht3.jpg" />
                </div>
                <div className="txtbinhcuoi1">
                  <a href="">
                    <div className="txt1boxbinhtong2-1">
                      Laptop MSI Cyborg 15 AI A1VE-053VN
                    </div>
                    <div className="boxbinhdanhgia">
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div className="txtboxbinhdanhgia">0 đánh giá</div>
                    </div>
                    <div className="boxbinhgia">
                      <div className="boxbinhgia1">
                        <div className="txt1boxbinhgia1">26,990,000₫</div>
                        <div className="txt2boxbinhgia1">34,990,000₫</div>
                      </div>
                      <div className="boxbinhgia2">
                        <div className="txt1boxbinhgia2">-32%</div>
                      </div>
                    </div>
                    <div className="binhtuychon2">
                      <div className="txtbinhtuychon2">Thêm vào giỏ</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box1binhtong6">
                <div className="binhcuoi3">
                  <img alt="" src="./images/binht2.jpg" />
                </div>
                <div className="txtbinhcuoi1">
                  <a href="">
                    <div className="txt1boxbinhtong2-1">
                      Laptop Gaming MSI Bravo 15 C7VFK-275VN
                    </div>
                    <div className="boxbinhdanhgia">
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div className="txtboxbinhdanhgia">0 đánh giá</div>
                    </div>
                    <div className="boxbinhgia">
                      <div className="boxbinhgia1">
                        <div className="txt1boxbinhgia1">23,990,000₫</div>
                        <div className="txt2boxbinhgia1">28,990,000₫</div>
                      </div>
                      <div className="boxbinhgia2">
                        <div className="txt1boxbinhgia2">-15%</div>
                      </div>
                    </div>
                    <div className="binhtuychon2">
                      <div className="txtbinhtuychon2">Thêm vào giỏ</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="box2binhtong6">
                <div className="binhcuoi4">
                  <img alt="" src="./images/binht1.jpg" />
                </div>
                <div className="txtbinhcuoi1">
                  <a href="">
                    <div className="txt1boxbinhtong2-1">
                      Laptop MSI Cyborg 15 AI A1VE-053VN
                    </div>
                    <div className="boxbinhdanhgia">
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div>
                        <i className="fa-regular fa-star" />
                      </div>
                      <div className="txtboxbinhdanhgia">0 đánh giá</div>
                    </div>
                    <div className="boxbinhgia">
                      <div className="boxbinhgia1">
                        <div className="txt1boxbinhgia1">26,990,000₫</div>
                        <div className="txt2boxbinhgia1">34,990,000₫</div>
                      </div>
                      <div className="boxbinhgia2">
                        <div className="txt1boxbinhgia2">-17%</div>
                      </div>
                    </div>
                    <div className="binhtuychon2">
                      <div className="txtbinhtuychon2">Thêm vào giỏ</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}

      <div className="fulltrang">
        <div className="head">
          <div className="trang">
            <div className="trai">
              <div className="trai1">
                <div>
                  <img alt="" src="./images/phi.png" />
                </div>
              </div>
              <div className="trai2">
                <div className="trai2-1">
                  <img alt="" src="./images/tainghe.png" />
                  <div className="txttrai2-1">
                    <a href="">
                      Tai nghe Belkin SoundForm Mini AUD002btPK for Kids
                    </a>
                  </div>
                  <div className="gia">
                    <img alt="" src="./images/gia1-1.png" />
                  </div>
                </div>
                <div className="trai2-2">
                  <img alt="" src="./images/tainghe1.png" />
                  <div className="txttrai2-2">
                    <a href="">
                      Tai nghe Belkin SoundForm Play AUC005btPK True Wireless{" "}
                    </a>
                  </div>
                  <div className="gia2">
                    <img alt="" src="./images/gia1-2.png" />
                  </div>
                </div>
              </div>
              <div className="trai3">
                <div className="trai3-1">
                  <img alt="" src="./images/tainghe2.png" />
                  <div className="txttrai3-1">
                    <a href="">Tai nghe Fnatic REACT+ | 7.1 Virtual Surround USB</a>
                  </div>
                  <div className="gia3">
                    <img alt="" src="./images/gia1-3.png" />
                  </div>
                </div>
                <div className="trai3-2">
                  <img alt="" src="./images/tainghe3.png" />
                  <div className="txttrai3-2">
                    <a href="">Tai nghe không dây Logitech G733 Lightspeed</a>
                  </div>
                  <div className="gia4">
                    <img alt="" src="./images/gia1-4.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="giua">
              <div className="giua1">
                <div>
                  <img alt="" src="./images/phi1.png" />
                </div>
              </div>
              <div className="giua2">
                <img alt="" src="./images/loa.png" />
                <a href="">Loa không dây di động Sony SRS-XB13</a>
                <div className="gialoa">
                  <img alt="" src="./images/gialoa.png" />
                </div>
                <div className="tuychon">
                  <a href="">Tùy chọn</a>
                </div>
              </div>
            </div>
            <div className="phai">
              <div className="phai1">
                <div>
                  <img alt="" src="./images/phi2.png" />
                </div>
              </div>
              <div className="phai2">
                <div className="phai2-1">
                  <img alt="" src="./images/tainghe4.png" />
                  <a href="">Tai nghe Corsair Virtuoso Pro</a>
                  <div className="gia5">
                    <img alt="" src="./images/gia1-1.png" />
                  </div>
                </div>
                <div className="phai2-2">
                  <img alt="" src="./images/tainghe5.png" />
                  <a href="">Tai nghe Edifier W830BT</a>
                  <div className="gia6">
                    <img alt="" src="./images/gia1-2.png" />
                  </div>
                </div>
              </div>
              <div className="phai3">
                <div className="phai3-1">
                  <img alt="" src="./images/tainghe6.png" />
                  <div className="txtphai3-1">
                    <a href="">Tai nghe không dây SENNHEISER Momentum 4 </a>
                  </div>
                  <div className="gia7">
                    <img alt="" src="./images/gia1-3.png" />
                  </div>
                </div>
                <div className="phai3-2">
                  <img alt="" src="./images/tainghe8.png" />
                  <div className="txtphai3-2">
                    <a href="">
                      Tai nghe Razer Barracuda X PUBG: Battlegrounds Edition
                    </a>
                  </div>
                  <div className="gia8">
                    <img alt="" src="./images/gia1-4.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ngang">
            <div className="textphai">
              <a href="">Siêu giảm giá - dành riêng cho bạn</a>
            </div>
            <div className="ke" />
            <div className="xemthem">
              <a href="">{`Xem thêm > `}</a>
            </div>
          </div>
          <div className="may">
            <div className="may1">
              <img alt="" src="./images/acer1.png" />
              <div className="txtmay1">
                <a href="">
                  Acer Predator Helios Neo 2023 PHN16-71-50JG (Core i5-13500HX,
                  16GB, 512GB, RTX 4050 6GB, 16" FHD+ 165Hz)
                </a>
              </div>
              <div className="giaacer1">
                <img alt="" src="./images/giaacer1.png" />
              </div>
              <div className="tuychon1">
                <a href="">Tùy chọn</a>
              </div>
            </div>
            <div className="may2">
              <img alt="" src="./images/acer2.png" />
              <div className="txtmay2">
                <a href="">
                  Laptop Gaming Acer Nitro 5 2021 AN515-57-5700 (Core i5 - 11400H,
                  16GB, 512GB, RTX3050Ti, 15.6'' FHD IPS 144Hz)
                </a>
              </div>
              <div className="giaacer2">
                <img alt="" src="./images/giaacer2.png" />
              </div>
              <div className="tuychon2">
                <a href="">Tùy chọn</a>
              </div>
            </div>
            <div className="may3">
              <img alt="" src="./images/dell1.png" />
              <div className="txtmay3">
                <a href="">
                  Dell Inspiron 14 Plus 7430 (Core i7-13620H, 16GB, 1TB, Intel
                  Graphics, 14" 2.5K)
                </a>
              </div>
              <div className="giadell1">
                <img alt="" src="./images/giadell1.png" />
              </div>
              <div className="tuychon3">
                <a href="">Tùy chọn</a>
              </div>
            </div>
            <div className="may4">
              <img alt="" src="./images/dell2.png" />
              <div className="txtmay4">
                <a href="">
                  Dell Inspiron 14 Plus 7430 (Core i7-13620H, 16GB, 1TB, Intel
                  Graphics, 14" 2.5K)
                </a>
              </div>
              <div className="giadell2">
                <img alt="" src="./images/giadell2.png" />
              </div>
              <div className="tuychon4">
                <a href="">Tùy chọn</a>
              </div>
            </div>
          </div>
          <div className="quangcao">
            <img src="./images/quangcao.png" />
          </div>
        </div>
      </div>
      <div className="Quan">
        <div className="maincuoi">
          <div className="thanhtieude1">
            <div className="tentieude1">Phụ kiện laptop</div>
            <div className="thanhdoc" />
            <div className="menu1-1">
              <a href="">
                <div className="menucon1-1">Bàn phím cơ</div>
                <div className="menucon1-1">Chuột</div>
                <div className="menucon1-1">Tai nghe</div>
              </a>
            </div>
            <div className="xemthem1">
              <a href="">{`Xem thêm >>`}</a>
            </div>
          </div>
          <div className="khungsp1">
            <div className="sp1">
              <div className="anhsp1">
                <img alt="" src="./images/bp1.jpg" />
              </div>
              <div className="noidungsp1">
                <a href="">
                  <div className="tensp1">Bàn phím cơ Keychron</div>
                </a>
                <div className="danhgiasp1">***** 0 đánh giá</div>
                <div className="giakmsp1">4.590.000đ</div>
                <div className="giasp1">4.690.000đ</div>
              </div>
            </div>
            <div className="sp1">
              <div className="anhsp1">
                <img alt="" src="./images/bp2.jpg" />
              </div>
              <div className="noidungsp1">
                <a href="">
                  <div className="tensp1">Bàn phím cơ Keychron K6...</div>
                </a>
                <div className="danhgiasp1">***** 0 đánh giá</div>
                <div className="giakmsp1">2.260.000đ</div>
                <div className="giasp1">2.800.000đ</div>
              </div>
            </div>
            <div className="sp1">
              <div className="anhsp1">
                <img alt="" src="./images/bp3.jpg" />
              </div>
              <div className="noidungsp1">
                <a href="">
                  <div className="tensp1">Bàn phím cơ Keychron Q2 Pro</div>
                </a>
                <div className="danhgiasp1">***** 0 đánh giá</div>
                <div className="giakmsp1">4.590.000đ</div>
                <div className="giasp1">4.680.000đ</div>
              </div>
            </div>
            <div className="sp3">
              <div className="anhsp3">
                <img alt="" src="./images/bp4.jpg" />
              </div>
              <div className="noidungsp3">
                <a href="">
                  <div className="tensp3">Bàn phím cơ không dây Lofree BDuck</div>
                </a>
                <div className="danhgiasp3">***** 0 đánh giá</div>
                <div className="giakmsp3">3.800.000đ</div>
                <div className="giasp3">4.200.000đ</div>
              </div>
            </div>
          </div>
          <div className="logocacnhanhang">
            <div className="nhanhang">
              <img alt="" src="./images/logoasus.jpg" />
            </div>
            <div className="nhanhang">
              <img alt="" src="./images/delllogo.jpg" />
            </div>
            <div className="nhanhang">
              <img alt="" src="./images/maclogo.jpg" />
            </div>
            <div className="nhanhang">
              <img alt="" src="./images/logothinkpad.jpg" />
            </div>
            <div className="nhanhang">
              <img alt="" src="./images/lenovologo.jpg" />
            </div>
            <div className="nhanhang">
              <img alt="" src="./images/acerlogo.jpg" />
            </div>
            <div className="nhanhang">
              <img alt="" src="./images/msilogo.jpg" />
            </div>
          </div>
          <div className="thanhtieude2">
            <div className="tentieude2">Bản tin công nghệ</div>
            <div className="thanhdoc" />
            <div className="menu2-1">
              <a href="">
                <div className="menucon2-1">Công nghệ</div>
              </a>
            </div>
            <div className="xemthem2">
              <a href="">{`Xem thêm >>`}</a>
            </div>
          </div>
          <div className="bantincongnghe">
            <div className="bt1">
              <div className="anh1">
                <img alt="" src="./images/tin1.jpg" />
              </div>
              <div className="noidung1">
                <a href="">
                  <div className="tieudend1">
                    Cách xử lý đồng hồ bị vào nước, hấp hơi nước cực đơn giản tại
                    nhà
                  </div>
                  <div className="noidungchinh1">
                    Trong quá trình sử dụng chắc hẳn các bạn đã gặp phải trường hợp
                    đồng hồ bị vào nước gây ảnh hưởng đến độ chính xác cũng như ...
                  </div>
                </a>
                <div className="thanhngang" />
                <div className="cuoibt1">
                  <div className="thoigiandang1">08/06/2024</div>
                  <div className="phanxemthem1">
                    <a href="">
                      <div className="xemchitiet1">Xem chi tiết</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bt1">
              <div className="anh1">
                <img alt="" src="./images/tin2.jpg" />
              </div>
              <div className="noidung1">
                <a href="">
                  <div className="tieudend1">
                    Realme toàn cầu đạt top 7 và 35 triệu người dùng
                  </div>
                  <div className="noidungchinh1">
                    Hãng smartphone tiếp nhận nhiều tin vui trong giai đoạn khó khăn
                    chung toàn cầu 5 tháng đầu năm 2020. Toàn cảnh thị trường
                    smartphone toàn...
                  </div>
                </a>
                <div className="thanhngang" />
                <div className="cuoibt1">
                  <div className="thoigiandang1">08/06/2024</div>
                  <div className="phanxemthem1">
                    <a href="">
                      <div className="xemchitiet1">Xem chi tiết</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bt1">
              <div className="anh1">
                <img alt="" src="./images/tin3.webp" />
              </div>
              <div className="noidung1">
                <a href="">
                  <div className="tieudend1">
                    Tổng hợp đánh giá CPU Intel Core Ultra: Nhanh mạnh, bền bỉ, cân
                    kèo Apple lẫn AMD
                  </div>
                  <div className="noidungchinh1">
                    Mặc dù đây mới chỉ là những phiên bản sản xuất sớm, cần được
                    trên tay tận nơi để kiểm chứng, nhưng kết quả kể...
                  </div>
                </a>
                <div className="thanhngang" />
                <div className="cuoibt1">
                  <div className="thoigiandang1">08/06/2024</div>
                  <div className="phanxemthem1">
                    <a href="">
                      <div className="xemchitiet1">Xem chi tiết</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bt1">
              <div className="anh1">
                <img alt="" src="./images/tin4.jpg" />
              </div>
              <div className="noidung1">
                <a href="">
                  <div className="tieudend1">
                    Cách gập màn hình laptop mà không tắt máy Win 11, Win 10
                  </div>
                  <div className="noidungchinh1">
                    Khi bạn muốn gập màn hình laptop nhưng máy vẫn phát nhạc hay vẫn
                    muốn download phần mềm trong lúc di chuyển thì mẹo gập..
                  </div>
                </a>
                <div className="thanhngang" />
                <div className="cuoibt1">
                  <div className="thoigiandang1">08/06/2024</div>
                  <div className="phanxemthem1">
                    <a href="">
                      <div className="xemchitiet1">Xem chi tiết</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
     
     </div>
   );
 }
 
 export default Home;


