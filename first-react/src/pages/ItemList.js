import { useEffect, useState } from "react";
import { itemAPI } from "../APIs/APIs";
import "../css/ItemList.css";

function ItemList({ rows = 0, sapxep = null, giathap=null,giacao=null }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await itemAPI.get("/");
                let data = response.data;

                // nếu giới hạn sản phẩm đều ra thì lấy nagaur nhiên sản phẩm
                if(rows!=0 ){
                    data = data.sort(() => 0.5 - Math.random()).slice(0, rows * 4);   
                }

                //Lọc giá
                if (giathap !== null && giacao !== null) {
                    data = data.filter((item) => item.price >= giathap && item.price <= giacao);
                }

                // Xếp giá
                if (sapxep === "giatang") {
                    data.sort((a, b) => a.price - b.price);
                } else if (sapxep === "giagiam") {
                    data.sort((a, b) => b.price - a.price);
                }

                setItems(data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        fetchItems();
    }, [rows, sapxep, giathap,giacao]); // Cập nhật khi thay đổi sortOrder

    return (
        <div className="sanphamtuongtu">
            <ul className="laptop-list" >
                {items.map((item) => (
                    <li key={item.id} className="sptt">
                        <a href={`/ChitietSanpham/${item.id}`}> 
                            <div className="img">
                                <img alt={item.name} src={item.images[0]} />
                            </div>
                            <div className="title">
                                <h4>{item.name}</h4>
                                <p>{item.price.toLocaleString("vi-VN")} đ</p>
                                <span>Xem ngay!</span>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
