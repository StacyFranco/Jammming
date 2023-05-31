import React, { useState } from 'react';
import "./Track.css";



function Track(props) {
    const handleClickAdd = (event) => {
        props.onAdd(props.track);
    }
    const handleClickRemove = (event) =>{
        props.onRemove(props.track)
    }

    const buttomAction = () =>{
        if(props.onAdd){
            return(<button className='btg-add' 
            onClick={handleClickAdd}
            >+</button>)
        }
        return(<button className='btg-add' 
            onClick={handleClickRemove}
            >-</button>)
    }

    return (
        <div className="track">
            <h3 className='SongName'>{props.track.name}</h3>
            {buttomAction()}
            {/* <button className='btg-add' >+</button> */}
            <p className='artist'>{props.track.artist}</p>
            <p className='album'> {props.track.album} </p>

        </div>
    );
};

export default Track;