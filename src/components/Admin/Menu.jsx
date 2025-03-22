import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import { FaTachometerAlt, FaBox, FaList, FaShoppingCart, FaUser } from 'react-icons/fa';

const Menu = () => {
    return (
        <aside className="menu">
            <div className="menu-header">
                <h2>EGA GEAR</h2>
                <p>Dashboard</p>
            </div>
            <nav className="menu-nav">
                <ul>
                    <li>
                        <Link to="/admin/dashboard">
                            <FaTachometerAlt className="icon" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/products">
                            <FaBox className="icon" />
                            <span>Products</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/categories">
                            <FaList className="icon" />
                            <span>Categories</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">
                            <FaShoppingCart className="icon" />
                            <span>Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/users">
                            <FaUser className="icon" />
                            <span>Users</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Menu;
