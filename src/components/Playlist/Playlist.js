import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import "./Playlist.css"

function Playlist () {
    return(
        <div className='Playlist'>
            <h2>Playlist</h2>
            <form>
                <input type='text' className='PlaylistName' placeholder='Playlist Name'></input>
            </form>
            <Tracklist />
        </div>
    );
};

export default Playlist;