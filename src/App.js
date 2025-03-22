import React, { useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import ShopProvider from "./utils/context";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Cart from "./components/Cart/Cart";
import AdminLayout from "./components/Admin/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
import Products from "./components/Admin/Products";
import Categories from "./components/Admin/Categories";
import Orders from "./components/Admin/Orders";
import Users from "./components/Admin/Users";
import AdminLogin from "./components/Admin/AdminLogin";
import AddProduct from "./components/Admin/Add/AddProduct";
import AddCategory from "./components/Admin/Add/AddCategory";
import "./App.scss";
import UpdateCategory from "./components/Admin/update/UpdateCategory";
import UploadProductImages from "./components/Admin/Add/UploadProductImages";
import ProductDetails from "./components/Admin/ProductDetails";
import UpdateProduct from "./components/Admin/update/UpdateProduct";
import Checkout from "./components/CheckOut/CheckOut";
import { AuthProvider } from "./utils/AuthContext";
import Account from "./Account/Account";
import UpdateOrder from "./components/Admin/update/UpdateOrder";

const App = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith("/admin");
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    return (
        <AuthProvider>
            <ShopProvider>
                {!isAdminRoute && <Header />}
                <Routes>
                    {/* Các route độc lập */}
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/account" element={<Account />} />

                    {/* Route admin và các route con */}
                    <Route path="/admin/login" element={<AdminLogin setIsAdminLoggedIn={setIsAdminLoggedIn} />} />
                    <Route
                        path="/admin"
                        element={
                            isAdminLoggedIn ? (
                                <AdminLayout isAdminLoggedIn={isAdminLoggedIn} setIsAdminLoggedIn={setIsAdminLoggedIn} />
                            ) : (
                                <Navigate to="/admin/login" />
                            )
                        }
                    >
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route path="add-product" element={<AddProduct />} />
                        <Route path="upload-product-images/:productId" element={<UploadProductImages />} />
                        <Route path="update-product/:productId" element={<UpdateProduct />} />
                        <Route path="product-details/:productId" element={<ProductDetails />} />
                        <Route path="categories" element={<Categories />} />
                        <Route path="add-category" element={<AddCategory />} />
                        <Route path="update-category/:id" element={<UpdateCategory />} />
                        <Route path="orders/update/:id" element={<UpdateOrder />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="users" element={<Users />} />
                    </Route>
                </Routes>
                {!isAdminRoute &&
                    location.pathname !== "/login" &&
                    location.pathname !== "/register" &&
                    location.pathname !== "/cart" && <Newsletter />}
                {!isAdminRoute && <Footer />}
            </ShopProvider>
        </AuthProvider>
    );
};

export default App;