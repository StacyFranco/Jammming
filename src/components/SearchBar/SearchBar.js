import React, { useState } from 'react';
import './SearchBar.css';


function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const hadleClickSearch = () => {
        props.onSearch(term)
    }
    return (
        <nav className='SB-nav'>

            <input type="text" className='name' placeholder={"Name of the song"} onChange={handleTermChange}></input>
            <button className='SB-buttom' onClick={hadleClickSearch}>Search</button>

        </nav>
    );
};

export default SearchBar;