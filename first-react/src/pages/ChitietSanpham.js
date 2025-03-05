import React from "react";
import Myheader from "./Myheader"
import '../css/ChitietSanpham.css';
import Footer from "./Footer"

function ChitietSanpham(){
    return(
        <div className="body">
            <Myheader/>
            <div className="main">
              <div className="thongtinsanpham">
                <div className="left">
                  <div className="hinhanh">
                    <div>
                      <img
                        alt=""
                        src="./images/8610_acer_gaming_nitro_v_2023_laptop_gaming_quoc_dan_1_2ffda667ab8d4b8a9ea8eccdcc25b36e_1024x1024.webp"
                      />
                      <button id="back">
                        <a href="#">
                          <ion-icon name="arrow-back-outline" />
                        </a>
                      </button>
                      <button id="next">
                        <a href="#">
                          <ion-icon name="arrow-forward-outline" />
                        </a>
                      </button>
                    </div>
                    <ul className="list-img">
                      <li>
                        <img
                          alt=""
                          src="./images/8610_acer_gaming_nitro_v_2023_laptop_gaming_quoc_dan_1_2ffda667ab8d4b8a9ea8eccdcc25b36e_1024x1024.webp"
                        />
                      </li>
                      <li>
                        <img
                          alt=""
                          src="./images/8610_acer_gaming_nitro_v_2023_laptop_gaming_quoc_dan_1_2ffda667ab8d4b8a9ea8eccdcc25b36e_1024x1024.webp"
                        />
                      </li>
                      <li>
                        <img
                          alt=""
                          src="./images/8610_acer_gaming_nitro_v_2023_laptop_gaming_quoc_dan_1_2ffda667ab8d4b8a9ea8eccdcc25b36e_1024x1024.webp"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="khuyenmai">
                    <ul className="quatang">
                      <h4>
                        <ion-icon name="gift-outline" /> Quà tặng
                      </h4>
                      <li>✅ Tặng Windows 11 bản quyền theo máy</li>
                      <li>✅ Miễn phí cân màu màn hình công nghệ cao</li>
                      <li>✅ Balo thời trang cao cấp</li>
                      <li>✅ Chuột không dây + lót chuột cao cấp</li>
                      <li>✅ Tặng gói cài đặt, bảo dưỡng, vệ sinh máy trọn đời</li>
                      <li>✅ Tặng Voucher giảm giá cho lần mua tiếp theo</li>
                    </ul>
                    <ul className="baohanh">
                      <h4>
                        <ion-icon name="gift-outline" /> Bảo hành
                      </h4>
                      <li>
                        <input id="option1" name="baohanh" type="radio" />
                        <label htmlFor="option1">
                          1 đổi 1 VIP 12 tháng: Đổi máy mới tương đương khi có lỗi từ NSX
                          trong 12 tháng
                        </label>
                        <p>1.500.00 đ</p>
                      </li>
                      <li>
                        <input id="option2" name="baohanh" type="radio" />
                        <label htmlFor="option2">
                          1 Đổi 1 6 tháng kể từ ngày nhận hàng
                        </label>
                        <p>1.500.00 đ</p>
                      </li>
                      <li>
                        <input id="option3" name="baohanh" type="radio" />
                        <label htmlFor="option3">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                          possimus.
                        </label>
                        <p>1.500.00 đ</p>
                      </li>
                    </ul>
                  </div>
                  <div className="more">
                    <h3>
                      <ion-icon name="star" /> Sản phẩm có gì nổi bật?
                    </h3>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                        amet repellendus in eum laboriosam facere aperiam sed explicabo
                        ullam cumque cum hic ducimus iure qui non alias id, expedita
                        maxime.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                        amet repellendus in eum laboriosam facere aperiam sed explicabo
                        ullam cumque cum hic ducimus iure qui non alias id, expedita
                        maxime.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                        amet repellendus in eum laboriosam facere aperiam sed explicabo
                        ullam cumque cum hic ducimus iure qui non alias id, expedita
                        maxime.
                      </p>
                    </div>
                    <span>
                      <b>Xem thêm...</b>
                    </span>
                  </div>
                </div>
                <div className="right">
                  <div className="muahang">
                    <h1>
                      Tên sản phẩm sẽ dài lằng ngoành và to ra một chút để người dùng chú
                      ý, chắc là sẽ cần?
                    </h1>
                    <p>Mua ngay chỉ với</p>
                    <div>
                      <div className="now">
                        <h1>19.999.000 đ</h1>
                        <a href="">Mua dứt!</a>
                      </div>
                      <div className="monthly">
                        <h3>1.999.000 đ/tháng</h3>
                        <a href="">Trả góp</a>
                      </div>
                      <p>hoặc</p>
                    </div>
                    <h3>Giá ưu đãi, mua ngay cho nóng, đừng bỏ lỡ</h3>
                  </div>
                  <div className="thongso">
                    <h3>Thông số kĩ thuật của sản phẩm</h3>
                    <table border="1" className="table">
                      <tbody>
                        <tr>
                          <th>CPU</th>
                          <td>
                            AMD Ryzen 7735H (3.20 GHz - 4.75 GHz, 8 cores, 16 threads)
                          </td>
                          <th>
                            <ion-icon name="checkmark-circle-outline" />
                          </th>
                        </tr>
                        <tr>
                          <th>Ram</th>
                          <td>Ram 16GB LPDDR5 6400MHz</td>
                          <th>
                            <ion-icon name="checkmark-circle-outline" />
                          </th>
                        </tr>
                        <tr>
                          <th>Ổ cứng</th>
                          <td>512 GB SSD</td>
                          <th />
                        </tr>
                        <tr>
                          <th>Card đồ họa</th>
                          <td>AMD Radeon 680M</td>
                          <th />
                        </tr>
                        <tr>
                          <th>Màn hình</th>
                          <td>
                            14’’ 2.8K (2880 x 1800) LED backlight 400 nits, anti-glare
                            IPS, color gamut 100% sRGB, 90Hz
                          </td>
                          <th>
                            <ion-icon name="checkmark-circle-outline" />
                          </th>
                        </tr>
                        <tr>
                          <th>Camera</th>
                          <td>1080P FHD RGB/IR Hybrid with Dual Microphone</td>
                          <th />
                        </tr>
                        <tr>
                          <th>Kết nối</th>
                          <td>
                            1x USB Type-C 3.2 Gen 2 2x USB Type-A 3.2 Gen 1 1x HDMI 2.1 1x
                            Thunderbolt 4 1x 3.5mm 1x USB Type-A 2.9 1x SD card, 1x RJ45
                          </td>
                          <th />
                        </tr>
                        <tr>
                          <th>Trọng lượng</th>
                          <td>1.5 kg</td>
                          <th>
                            <ion-icon name="checkmark-circle-outline" />
                          </th>
                        </tr>
                        <tr>
                          <th>Pin</th>
                          <td>4Cell 62WHr</td>
                          <th />
                        </tr>
                        <tr>
                          <th>Hệ điều hành</th>
                          <td>Window 11 bản quyền</td>
                          <th>
                            <ion-icon name="checkmark-circle-outline" />
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="sanphamtuongtu">
                <ul>
                  <li className="sptt item1">
                    <a href="#">
                      <img
                        alt=""
                        src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                      />
                      <div>
                        <h4>Tên sản phẩm</h4>
                        <p>19.999.000 đ</p>
                        <h4>Xem ngay!</h4>
                      </div>
                    </a>
                  </li>
                  <li className="sptt item2">
                    <a href="#">
                      <img
                        alt=""
                        src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                      />
                      <div>
                        <h4>Tên sản phẩm</h4>
                        <p>19.999.000 đ</p>
                        <h4>Xem ngay!</h4>
                      </div>
                    </a>
                  </li>
                  <li className="sptt item3">
                    <a href="#">
                      <img
                        alt=""
                        src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                      />
                      <div>
                        <h4>Tên sản phẩm</h4>
                        <p>19.999.000 đ</p>
                        <h4>Xem ngay!</h4>
                      </div>
                    </a>
                  </li>
                  <li className="sptt item4">
                    <a href="#">
                      <img
                        alt=""
                        src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                      />
                      <div>
                        <h4>Tên sản phẩm</h4>
                        <p>19.999.000 đ</p>
                        <h4>Xem ngay!</h4>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="sptt item5">
                    <a href="#">
                      <img
                        alt=""
                        src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                      />
                      <div>
                        <h4>Tên sản phẩm</h4>
                        <p>19.999.000 đ</p>
                        <h4>Xem ngay!</h4>
                      </div>
                    </a>
                  </li>
                  <li className="sptt item6">
                    <a href="#">
                      <img
                        alt=""
                        src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                      />
                      <div>
                        <h4>Tên sản phẩm</h4>
                        <p>19.999.000 đ</p>
                        <h4>Xem ngay!</h4>
                      </div>
                    </a>
                  </li>
                  <li className="sptt item7">
                    <a href="#">
                      <img
                        alt=""
                        src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                      />
                      <div>
                        <h4>Tên sản phẩm</h4>
                        <p>19.999.000 đ</p>
                        <h4>Xem ngay!</h4>
                      </div>
                    </a>
                  </li>
                  <li className="sptt item8">
                    <a href="#">
                      <img
                        alt=""
                        src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                      />
                      <div>
                        <h4>Tên sản phẩm</h4>
                        <p>19.999.000 đ</p>
                        <h4>Xem ngay!</h4>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="binhluan">
                <div className="vote">
                  <h1>Đánh giá của khách hàng</h1>
                  <div className="ketquadanhgia">
                    <div className="tongdanhgia">
                      <p>4.9</p>
                      <h4>Số lượt đánh giá</h4>
                      <ul>
                        <li id="star star1">
                          <ion-icon name="star-outline" />
                        </li>
                        <li id="star star2">
                          <ion-icon name="star-outline" />
                        </li>
                        <li id="star star3">
                          <ion-icon name="star-outline" />
                        </li>
                        <li id="star star4">
                          <ion-icon name="star-outline" />
                        </li>
                        <li id="star star5">
                          <ion-icon name="star-outline" />
                        </li>
                      </ul>
                      <button>Đánh giá sản phẩm</button>
                    </div>
                    <div className="chitietdanhgia">
                      <ul>
                        <li>
                          <p>
                            5
                            <ion-icon name="star-outline" />
                          </p>
                          <progress id="progressBar" max="100" value="50" />
                          <p>00</p>
                        </li>
                        <li>
                          <p>
                            4
                            <ion-icon name="star-outline" />
                          </p>
                          <progress id="progressBar" max="100" value="50" />
                          <p>00</p>
                        </li>
                        <li>
                          <p>
                            3
                            <ion-icon name="star-outline" />
                          </p>
                          <progress id="progressBar" max="100" value="50" />
                          <p>00</p>
                        </li>
                        <li>
                          <p>
                            2
                            <ion-icon name="star-outline" />
                          </p>
                          <progress id="progressBar" max="100" value="50" />
                          <p>00</p>
                        </li>
                        <li>
                          <p>
                            1
                            <ion-icon name="star-outline" />
                          </p>
                          <progress id="progressBar" max="100" value="50" />
                          <p>00</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="locdanhgia">
                    <h4>Số lượng đánh giá</h4>
                    <ul>
                      <li>Tất cả</li>
                      <li>
                        5
                        <ion-icon name="star-outline" />
                      </li>
                      <li>
                        4
                        <ion-icon name="star-outline" />
                      </li>
                      <li>
                        3
                        <ion-icon name="star-outline" />
                      </li>
                      <li>
                        2
                        <ion-icon name="star-outline" />
                      </li>
                      <li>
                        1
                        <ion-icon name="star-outline" />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cmt">
                  <input
                    placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm"
                    type="text"
                  />
                  <button> Gửi bình luận</button>
                </div>
                <form className="uploadimages">
                  <label htmlFor="imageUpload">Chọn hình ảnh để tải lên:</label>
                  <input accept="image/*" id="imageUpload" name="image" type="file" />
                </form>
                <ul className="list-cmt">
                  <li id="user-cmt">
                    <img alt="user" src="./images/user.png" />
                    <div>
                      <p>
                        <b>Tên người dùng</b>
                      </p>
                      <p>Cmt ngắn.</p>
                    </div>
                  </li>
                  <li id="user-cmt">
                    <img alt="user" src="./images/user.png" />
                    <div>
                      <p>
                        <b>Tên người dùng</b>
                      </p>
                      <p>Cmt ngắn</p>
                    </div>
                  </li>
                  <li id="user-cmt">
                    <img alt="user" src="./images/user.png" />
                    <div>
                      <p>
                        <b>Tên người dùng</b>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                        perferendis laborum suscipit mollitia debitis nesciunt corrupti
                        officiis illo harum quas!
                      </p>
                    </div>
                  </li>
                  <li id="user-cmt">
                    <img alt="user" src="./images/user.png" />
                    <div>
                      <p>
                        <b>Tên người dùng</b>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur culpa labore totam iusto sequi? Doloremque porro
                        magnam doloribus voluptatibus aliquam!{" "}
                      </p>
                    </div>
                  </li>
                  <li id="user-cmt">
                    <img alt="user" src="./images/user.png" />
                    <div>
                      <p>
                        <b>Tên người dùng</b>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                        minima, dignissimos voluptate sunt iure veniam. Quae deserunt
                        reiciendis quas velit?
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <Footer/>
        </div>
    );
};
export default ChitietSanpham;