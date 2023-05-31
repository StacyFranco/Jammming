import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <div className='SearchResults'>
            <h2>Search Results</h2>
            <Tracklist tracks={props.trackSearched} onAdd={props.onAdd}/>
        </div>
    );
};

export default SearchResults;