import React from 'react';
import "./Track.css";

function Track({name,artist,album}){
    return (
        <div className="track">
            <h3 className='SongName'>{name}</h3>
            <button className='btg-add'>add</button>
            <p className='artist'>{artist}</p>
            <p className='album'> {album} </p>
            
        </div>
    );
};

export default Track;