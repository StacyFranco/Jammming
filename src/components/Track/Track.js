import React from 'react';

function Track({name,artist,album}){
    return (
        <div id="track">
            <button>add</button>
            <h2>{name}</h2>
            <p>{artist}</p>
            <p> {album} </p>
        </div>
    );
};

export default Track;