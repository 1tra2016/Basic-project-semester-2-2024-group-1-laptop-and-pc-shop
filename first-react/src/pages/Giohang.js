import React, { useEffect, useState } from "react";
import { itemAPI } from "../APIs/APIs";
import Myheader from "./Myheader"
import '../css/Giohang.css'
import Footer from "./Footer"
const Giohang = () => {
    const [user, setUser] = useState(null);
    const [itemscart, setItemscart] = useState([]);
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");
    const [price, setPrice] = useState(""); 
    
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Chuyển từ JSON string thành object
        }
        
    }, []);

    useEffect(() => {
        if(user){
            setItemscart(user.cart)
        }
    }, [user]); 


    const GetInforItem = async () =>{
        try {
            const response = await itemAPI.get("/");
            const items = response.data;
            const foundItems = items.filter((item) => 
              itemscart.some(cartItem => cartItem.id === item.id)
            );
            
            
            if (foundItems) {
              
                alert("Chào mừng trở lại "+foundItems[0].id)
                setItems(foundItems)
            }
        }
        catch (err) {
            setError("Lỗi kết nối đến server");
            console.error("Login error:", err);
          }
    };

    useEffect(() => {
        GetInforItem();
    }, [itemscart]); 

  
    return (
    <div>
        <Myheader/>
        <h2>Item List</h2>  
        
        <table border="1" cellPadding="4">
            <thead>
              <tr>
                <th>Tên</th>
                <th>Giá trị</th>
                <th>Tồn kho</th>
                <th>Hình ảnh</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price.toLocaleString("vi-VN")} VND</td>
                    <td>{item.remain}</td>
                    <td>
                        {Array.isArray(item.images) ? (
                            <img src={item.images[0]} alt="" width="100" />
                        ) : (
                            <p>Không có ảnh</p>
                        )}
                    </td>
                </tr>
              ))}
            </tbody>
        </table>
        <Footer/>
    </div>
    );
};

export default Giohang;
