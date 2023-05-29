import React from 'react';
import './SearchBar.css';

function SearchBar(){
    return (
        <nav className='SB-nav'>
            <form className='SB-form'>
                <input type="text" className='name' placeholder={"Name of the song"}></input>
                <button className='SB-buttom'>Search</button>
            </form>
        </nav>
    );
};

export default SearchBar;