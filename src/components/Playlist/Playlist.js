import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import "./Playlist.css"

function Playlist(props) {
    return (
        <div className='Playlist'>
            <h2>Playlist</h2>
            <input type='text' className='PlaylistName' placeholder='Playlist Name'></input>
            <Tracklist tracks={props.savedTracks} onRemove={props.onRemove} />
            <button className="Playlist-save" onClick={props.onSave}>Save to Spotify</button>
        </div>
    );
};

export default Playlist;