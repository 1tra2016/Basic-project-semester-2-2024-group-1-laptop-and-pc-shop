import React, { createContext, useState, useEffect } from 'react';

export const ShopCont = createContext();

const ShopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [products, setProducts] = useState([]); // Thêm để lưu danh sách sản phẩm
    const [categories, setCategories] = useState([]); // Thêm để lưu danh mục

    // Tự động cập nhật cartCount khi cartItems thay đổi
    useEffect(() => {
        const totalCount = cartItems.reduce((count, item) => count + item.quantity, 0);
        setCartCount(totalCount);
    }, [cartItems]);

    const getTotalCartAmount = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <ShopCont.Provider
            value={{
                cartItems,
                setCartItems,
                cartCount,
                setCartCount,
                getTotalCartAmount,
                products,
                setProducts,
                categories,
                setCategories,
            }}
        >
            {children}
        </ShopCont.Provider>
    );
};

export default ShopProvider;