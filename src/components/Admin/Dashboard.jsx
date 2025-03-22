import React from 'react';
import { FaBox, FaList, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-header-container">
                <h2>Dashboard</h2>
                <p>Welcome to the admin dashboard.</p>
            </div>
            <div className="data-summary-container">
                <div className="data-summary">
                    <div className="data-card products">
                        <div className="icon-container">
                            <FaBox className="icon" />
                        </div>
                        <div className="info">
                            <h3>Products</h3>
                            <p>150</p>
                        </div>
                    </div>
                    <div className="data-card categories">
                        <div className="icon-container">
                            <FaList className="icon" />
                        </div>
                        <div className="info">
                            <h3>Categories</h3>
                            <p>20</p>
                        </div>
                    </div>
                    <div className="data-card orders">
                        <div className="icon-container">
                            <FaShoppingCart className="icon" />
                        </div>
                        <div className="info">
                            <h3>Orders</h3>
                            <p>75</p>
                        </div>
                    </div>
                    <div className="data-card users">
                        <div className="icon-container">
                            <FaUser className="icon" />
                        </div>
                        <div className="info">
                            <h3>Users</h3>
                            <p>300</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;