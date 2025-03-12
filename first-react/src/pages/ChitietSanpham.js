import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userAPI, itemAPI } from "../APIs/APIs";
import Myheader from "./Myheader"
import '../css/ChitietSanpham.css';
import Footer from "./Footer"
import ItemList from "./ItemList";

function ChitietSanpham()  {
  const [item, setItem] = useState([]);
  const [bigimg, setBigimg] = useState(null);
  const { id } = useParams(); // Lấy ID từ URL
  const [user, setUser] = useState(null);
  

  const fetchItems = async () => {
    try {
      const response = await itemAPI.get(`/${id}`); 
      setItem(response.data);
      
    } catch (error) {
      console.error("Error fetching item:", error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, [id]);
  
  useEffect(()=>{
    if (item && item.images && item.images.length > 0) {
      setBigimg(item.images[0]);
    } else {
      setBigimg(null); // Hoặc đặt giá trị mặc định
    }
  },[item]);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    }
}, []);

  const mua = async (e) => {
    e.preventDefault(); // Ngăn reload trang
    if (!user) {
        alert("Bạn chưa đăng nhập");
        return;
    }
    try {
        // Bước 1: Lấy dữ liệu user hiện tại
        const response = await userAPI.get(`/${user.id}`);
        const currentCart = response.data.cart || []; // Nếu cart chưa có, đặt là []

        // Bước 2: Kiểm tra sản phẩm đã tồn tại chưa
        const itemIndex = currentCart.findIndex(item => item.id === id);
        
        if (itemIndex !== -1) {
            // Nếu sản phẩm đã có, tăng số lượng lên 1
            currentCart[itemIndex].number += 1;
        } else {
            // Nếu chưa có, thêm sản phẩm mới với số lượng là 1
            currentCart.push({ id, number: 1 });
        }

        // Bước 3: Cập nhật giỏ hàng trên server
        await userAPI.patch(`/${user.id}`, { cart: currentCart });
        
        // Bươcs 4: Cập nhật số lượng sảnphamra còn lại
        const remain = item.remain - 1
        alert("số lượng còn lại: "+remain)
        await itemAPI.patch(`/${item.id}`, { remain: remain });

        alert("Thêm vào giỏ hàng thành công!");
        fetchItems();
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error.response?.data || error.message);
    }
  };
  return(
        <div className="body">
            <Myheader/>
            <div className="main">
              <div className="thongtinsanpham">
                <div className="left">
                  <div className="hinhanh">
                    <div>
                      {bigimg ? (
                        <img
                          alt=""
                          src={bigimg}
                        />
                      ) : (
                        <p>Đang tải hình ảnh...</p>

                      )}
                    </div>
                    <ul className="list-img">
                    {item.images != null ? (
                      item.images.map((img, index) => (
                        <li>
                          <img
                            key={index}
                            src={img}
                            alt={`Thumbnail ${index}`}
                            onClick={() => setBigimg(img)}
                          />
                        </li>
                      ))
                    ) : (
                      <p>Đang tải ảnh...</p> // Hiển thị text khi API chưa trả về dữ liệu
                    )}
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
                      {item.name}
                    </h1>
                    <p>Mua ngay chỉ với</p>
                    <div>
                      <div className="now">
                        <h1>{item.price ? item.price.toLocaleString("vi-VN") : "Đang tải..."} VND</h1>
                        <a href="" onClick={mua}>Mua dứt!</a>
                        <p>hoặc</p>
                      </div>
                      <div className="monthly">
                        <h3>{item.monthly ? item.monthly.toLocaleString("vi-VN") : "Đang tải..."} VND/tháng</h3>
                        <a href="" onClick={mua}>Trả góp</a>
                      </div>
                    </div>
                    <h3>Giá ưu đãi, mua ngay cho nóng, đừng bỏ lỡ</h3>
                    <h3>Số lượng sản phẩm chỉ còn: {item.remain} sản phẩm</h3>
                  </div>
                  <div className="thongso">
                    <h3>Thông số kĩ thuật của sản phẩm</h3>
                    <table border="1" className="table">
                      <tbody>
                        <tr>
                          <th>CPU</th>
                          <td>{item.cpu}</td>
                        </tr>
                        <tr>
                          <th>Ram</th>
                          <td>{item.ram}</td>
                        </tr>
                        <tr>
                          <th>Ổ cứng</th>
                          <td>{item.drive}</td>
                          
                        </tr>
                        <tr>
                          <th>Card đồ họa</th>
                          <td>{item.card}</td>
                        </tr>
                        <tr>
                          <th>Màn hình</th>
                          <td>{item.screen}</td>
                        </tr>
                        <tr>
                          <th>Camera</th>
                          <td>{item.camera}</td>
                        </tr>
                        <tr>
                          <th>Kết nối</th>
                          <td>{item.port}</td>
                        </tr>
                        <tr>
                          <th>Trọng lượng</th>
                          <td>{item.weight}</td>
                        </tr>
                        <tr>
                          <th>Pin</th>
                          <td>{item.weight}</td>
                        </tr>
                        <tr>
                          <th>Hệ điều hành</th>
                          <td>{item.system}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <ItemList rows={1} cols={4}/>
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
                    <img alt="user" src="../images/user.png" />
                    <div>
                      <p>
                        <b>Tên người dùng</b>
                      </p>
                      <p>Cmt ngắn.</p>
                    </div>
                  </li>
                  <li id="user-cmt">
                    <img alt="user" src="../images/user.png" />
                    <div>
                      <p>
                        <b>Tên người dùng</b>
                      </p>
                      <p>Cmt ngắn</p>
                    </div>
                  </li>
                  <li id="user-cmt">
                    <img alt="user" src="../images/user.png" />
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
                    <img alt="user" src="../images/user.png" />
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
                    <img alt="user" src="../images/user.png" />
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

