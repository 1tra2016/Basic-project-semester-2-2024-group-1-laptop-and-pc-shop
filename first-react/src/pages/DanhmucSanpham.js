import React from "react";
import Myheader from "./Myheader"
import '../css/DanhmucSanpham.css'
import Footer from "./Footer"
const DanhmucSanpham = () =>{
    return(
        <div>
            <Myheader/>
            
            <div className="khungmainsp">
                <div className="mainsp">
                  <div className="locphankhuc">
                    <div className="textlpk">Chọn khoảng giá:</div>
                    <div className="cacphankhuc">
                      <a href="">
                        <div className="phankhuc">5 triệu - 10 triệu</div>
                      </a>
                    </div>
                    <div className="cacphankhuc">
                      <a href="">
                        <div className="phankhuc">10 triệu - 20 triệu</div>
                      </a>
                    </div>
                    <div className="cacphankhuc">
                      <a href="">
                        <div className="phankhuc">20 triệu - 30 triệu</div>
                      </a>
                    </div>
                    <div className="cacphankhuc">
                      <a href="">
                        <div className="phankhuc">30 triệu - 50 triệu</div>
                      </a>
                    </div>
                    <div className="cacphankhuc">
                      <a href="">
                        <div className="phankhuc">Trên 50 triệu</div>
                      </a>
                    </div>
                  </div>
                  <div className="locphankhuc">
                    <div className="textlpk">Sắp xếp theo:</div>
                    <div className="sapxeptheo">
                      <a href="">
                        <div className="phankhuc">Mới nhất</div>
                        <div className="phankhuc">Giá tăng dần</div>
                        <div className="phankhuc">Giá giảm dần</div>
                        <div className="phankhuc">Lượt xem</div>
                        <div className="phankhuc">Đánh giá</div>
                        <div className="phankhuc">{`Tên A->Z`}</div>
                      </a>
                    </div>
                  </div>
                  <div className="tongday">
                    <div className="day">
                      <div className="sanpham">
                        <img
                          alt=""
                          src=".\images\Laptop.png"
                        />
                        <div className="textsp">
                          <a href="/ChitietSanpham">
                            <div className="tensanpham">
                              [New 100%] Laptop Asus TUF Gaming A15 FA506NF-HN005W
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">15.690.000 đ</div>
                            <div className="giatruockhuyenmai">22.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <div className="imagetop">
                          <img
                            alt=""
                            src="./images/Laptop2.jpg"
                          />
                        </div>
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop HP Envy x360 14-es0033dx 7H9Y1UA
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">18.990.000 đ</div>
                            <div className="giatruockhuyenmai">26.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/Laptop3.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop Lenovo IdeaPad 5 Pro 16IRH8 83AQ000PUS
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">25.390.000 đ</div>
                            <div className="giatruockhuyenmai">33.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/Laptop4.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop Lenovo Yoga 6 13ABR8 83B2001UUS
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">13.990.000 đ</div>
                            <div className="giatruockhuyenmai">23.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="day">
                      <div className="sanpham">
                        <img alt="" src="./images/Laptop5.jpg" />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop MSI Cyborg 15 A12UCX-618VN
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">15.990.000 đ</div>
                            <div className="giatruockhuyenmai">29.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <div className="imagetop">
                          <img
                            alt=""
                            src="./images/[New Outlet] Laptop Acer Gaming Predator Helios Neo 16 PHN16-71-73RR NHQMAAA001.jpg"
                          />
                        </div>
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New Outlet] Laptop Acer Gaming Predator Helios Neo 16
                              PHN16-71-73RR NHQMAAA001
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">23.990.000 đ</div>
                            <div className="giatruockhuyenmai">25.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/[New Outlet] Laptop Acer Nitro 5 AN515-58-57QW.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New Outlet] Laptop Acer Nitro 5 AN515-58-57QW
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">17.690.000 đ</div>
                            <div className="giatruockhuyenmai">26.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/[New Outlet] Laptop Dell Inspiron 14 5430-PR2P1.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New Outlet] Laptop Dell Inspiron 14 5430-PR2P1
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">17.390.000 đ</div>
                            <div className="giatruockhuyenmai">26.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="day">
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/[New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New Outlet] Laptop Lenovo Slim 7 16IAH7 82VB0000US
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">20.990.000 đ</div>
                            <div className="giatruockhuyenmai">29.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <div className="imagetop">
                          <img alt="" src="./images/Laptop6.jpg" />
                        </div>
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] HP Victus 15 FB1013dx 845A2UA
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">14.790.000 đ</div>
                            <div className="giatruockhuyenmai">23.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/Laptop7.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop Asus Expert Book B1 B1400CEAE-EK4366
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">8.590.000 đ</div>
                            <div className="giatruockhuyenmai">15.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/Laptop8.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop Asus TUF Gaming F15 FX507VU-LP198W
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">26.390.000 đ</div>
                            <div className="giatruockhuyenmai">36.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="day">
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/Laptop9.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop ASUS Vivobook 15 OLED A1505VA-L1113W
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">17.290.000 đ</div>
                            <div className="giatruockhuyenmai">22.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <div className="imagetop">
                          <img
                            alt=""
                            src="./images/Laptop10.jpg"
                          />
                        </div>
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop Dell Inspiron 16 5620 R1605SDCXM888
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">14.590.000 đ</div>
                            <div className="giatruockhuyenmai">19.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/Laptop11.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop Dell Inspiron 16 5620 R2608S DCXM888
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">14.590.000 đ</div>
                            <div className="giatruockhuyenmai">19.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                      <div className="sanpham">
                        <img
                          alt=""
                          src="./images/Laptop12.jpg"
                        />
                        <div className="textsp">
                          <a href="">
                            <div className="tensanpham">
                              [New 100%] Laptop Dell Inspiron 16 5635-R1505S
                            </div>
                            <div className="danhgiasanpham">
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />
                              <i className="fa-regular fa-star" />0 đánh giá
                            </div>
                            <div className="giasaukhuyenmai">12.990.000 đ</div>
                            <div className="giatruockhuyenmai">15.990.000 đ</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chuyentrang">
                    <div className="boxso">
                      <a href="">
                        <div className="so">1</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">2</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">3</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">4</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">5</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">6</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">7</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">8</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">9</div>
                      </a>
                    </div>
                    <div className="boxso">
                      <a href="">
                        <div className="so">10</div>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default DanhmucSanpham;