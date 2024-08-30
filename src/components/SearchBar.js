import React from 'react';
// import '../styles/SearcBar.css';
import '../styles/SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Type" />
            <input type="text" placeholder="Price" />
            <input type="date" />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;

