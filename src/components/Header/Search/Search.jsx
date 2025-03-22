import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";
import PRODUCTS from "../../../mockData"; // Import mock data

const Search = ({ setSearchModal }) => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchHistory, setSearchHistory] = useState([]);
    const navigate = useNavigate();

    const onChange = (e) => {
        const inputValue = e.target.value;
        setQuery(inputValue);
        if (inputValue.length > 0) {
            const results = PRODUCTS.filter(product =>
                product.title && product.title.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
        setSearchHistory(savedHistory);
    }, []);

    const handleSearchItemClick = (item) => {
        navigate("/product/" + item.id);
        setSearchModal(false);
        const newHistory = [item, ...searchHistory.filter(i => i.id !== item.id)];
        setSearchHistory(newHistory);
        localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    };

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setSearchModal(false)}
                />
            </div>
            <div className="search-result-content">
                {!searchResults.length && (
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                )}
                <div className="search-results">
                    {searchResults.map((item) => (
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => handleSearchItemClick(item)}
                        >
                            <div className="image-container">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.title}
                                </span>
                                <span className="desc">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                {searchHistory.length > 0 && (
                    <div className="search-history">
                        <h3>Search History</h3>
                        {searchHistory.map((item) => (
                            <div
                                className="search-result-item"
                                key={item.id}
                                onClick={() => handleSearchItemClick(item)}
                            >
                                <div className="image-container">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="prod-details">
                                    <span className="name">
                                        {item.title}
                                    </span>
                                    <span className="desc">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
