import React, {useEffect, useState } from "react";
import Myheader from "./Myheader"
import '../css/DanhmucSanpham.css'
import Footer from "./Footer"
import ItemList from "./ItemList"
const DanhmucSanpham = () =>{
  const [sapxep, setSapxep] = useState(); 
  const [giathap, setGiathap] = useState(null); 
  const [giacao, setGiacao] = useState(null); 
  const [pk, setpk] = useState(null); 

  function giatang(){
    setSapxep("giatang")
  }
  
  function giagiam(){
    setSapxep("giagiam")

  }

  const chonKhoangGia = (thap, cao, pk) => {
    setGiathap(thap);
    setGiacao(cao);
    setpk(pk)
  };

 
  return(
      <div>
          <Myheader/>
          <div className="khungmainsp">
              <div className="mainsp">
                <div className="locphankhuc">
                  <div className="textlpk">Chọn khoảng giá:</div>
                  <button onClick={() => chonKhoangGia(null, null, "pk0")}  className="phankhuc"  >Tất cả</button>
                  <button onClick={() => chonKhoangGia(5000000, 10000000, "pk1")}  className={pk == "pk1" ? "phankhuc select" : "phankhuc"}>5 triệu - 10 triệu</button>
                  <button onClick={() => chonKhoangGia(10000000, 20000000, "pk2")} className={pk == "pk2" ? "phankhuc select" : "phankhuc"}>10 triệu - 20 triệu</button>
                  <button onClick={() => chonKhoangGia(20000000, 30000000, "pk3")} className={pk == "pk3" ? "phankhuc select" : "phankhuc"}>20 triệu - 30 triệu</button>
                  <button onClick={() => chonKhoangGia(30000000, 50000000, "pk4")} className={pk == "pk4" ? "phankhuc select" : "phankhuc"}>30 triệu - 50 triệu</button>
                  <button onClick={() => chonKhoangGia(50000000, Infinity, "pk5")} className={pk == "pk5" ? "phankhuc select" : "phankhuc"}>Trên 50 triệu</button>
                </div>
                <div className="locphankhuc">
                  <div className="textlpk">Sắp xếp theo:</div>
                  <button onClick={giatang} className={sapxep == "giatang" ? "phankhuc select" : "phankhuc"}>Sắp giá tăng dần</button>
                  <button onClick={giagiam} className={sapxep == "giagiam" ? "phankhuc select" : "phankhuc"}>Xếp giá giảm dần</button>
                  <button className="phankhuc">Đánh giá</button>
                  <button className="phankhuc">Tên A => Z</button>
                </div>
                <div>
                    <ItemList rows={0} sapxep={sapxep} giathap={giathap} giacao={giacao} />
                </div>
                
                <div className="chuyentrang">
                  <div className="boxso">
                    <a href="">
                      <div className="so">1</div>
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