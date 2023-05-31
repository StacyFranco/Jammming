import React from 'react';
import Track from '../Track/Track';


function Tracklist(props) {
    return (
        <div>
            {/* it was need to use ? beccause was given an error of undefined map*/
            props.tracks?.map((track) => {
            return (
            <Track
                track={track}
                key={track.id} 
                onAdd={props.onAdd}
                onRemove={props.onRemove}
            /> )}
        )}
               
            
        </div>

    );
};
export default Tracklist;