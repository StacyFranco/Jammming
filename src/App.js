import React, { useCallback, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';


const testTracks = [
  { name: "thrive", artist: "Casting Crowns", album: "Thrive", id: 1 },
  { name: "Castelo Forte", artist: "Alessandra Samadello", album: "Braços Abertos", id: 2 },
  { name: "Mercy Said No", artist: "The Ball Brothers", album: "The Ball Brothers", id: 3 },
  { name: "I Do Believe", artist: "Gaither Vocal Band", album: "I Do Believe", id: 4 },
  //{name: "thrive", artist: "Casting Crowns", album: "Thrive", id:1}
];
function App() {
  const [trackSearched, setTrackSearched] = useState(testTracks);
  const [searchResults, setSearchResults] = useState(testTracks);
  const [savedTracks, setSavedTracks] = useState([]);

  const search = () => {
    setTrackSearched(testTracks);
  };

  const addTrack = (track) => {

    if (savedTracks.some((savedTrack) => savedTrack.id === track.id))
      return;
    setSavedTracks((prevTracks) => [...prevTracks, track])
    console.log(savedTracks)
    //removing track from trackSearched
    setTrackSearched((prevTracks) =>
      prevTracks.filter((currentTrack) =>
        currentTrack.id !== track.id)
    );
  };

  const removeTrack = (track) => {
    setSavedTracks((prevTracks) =>
      prevTracks.filter((currentTrack) =>
        currentTrack.id !== track.id)
    );
    //realocating the trak on the search... right now misses one render to be updated with the 
    setTrackSearched(searchResults.filter(track =>
       !savedTracks.includes(track)));
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <SearchBar />
      <main className="App-main">
        <SearchResults trackSearched={trackSearched} onAdd={addTrack} />
        <Playlist savedTracks={savedTracks} onRemove={removeTrack} />
      </main>
      <footer className="App-footer">
        <p>copyright</p>
        <p><a
          className="App-link"
          href="https://www.freepik.com/free-vector/abstract-music-background_1250515.htm#query=music%20background&position=43&from_view=search&track=ais"
        >Background image by Harryarts</a> on Freepik</p>
      </footer>
    </div>
  );
}

export default App;
