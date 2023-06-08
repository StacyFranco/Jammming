import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../API/spotify';


const testTracks = [
  { name: "thrive", artist: "Casting Crowns", album: "Thrive", id: 1 },
  { name: "Castelo Forte", artist: "Alessandra Samadello", album: "Braços Abertos", id: 2 },
  { name: "Mercy Said No", artist: "The Ball Brothers", album: "The Ball Brothers", id: 3 },
  { name: "I Do Believe", artist: "Gaither Vocal Band", album: "I Do Believe", id: 4 },
  //{name: "thrive", artist: "Casting Crowns", album: "Thrive", id:1}
];

let searchResults = [];
let playlistTracks = [];

function App() {
  Spotify.getAccessToken();
  let playlist = "New Playlist";

  const [trackSearched, setTrackSearched] = useState([]);
  //const [searchResults, setSearchResults] = useState([]);
  const [savedTracks, setSavedTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");


  const search = async (term) => {
    //setTrackSearched(testTracks);
    const test = await Spotify.search(term).then((res) => {
      searchResults = res
    });
    //  Spotify.search(term).then(setSearchResults);
    // Function to filter saved tracks from the search side
    //searchResultsFiltered = searchResults.filter(track =>
    setTrackSearched(searchResults.filter(track =>
      !savedTracks.some(item => item.id === track.id)));
    //setTrackSearched(searchResultsFiltered);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = () => {
    if(playlistName !== ""){
      playlist = playlistName};
    
    const trackUris = savedTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlist, trackUris).then(() => {
      setPlaylistName("");
      setSavedTracks([]);
      playlistTracks = [];
      //setTrackSearched([]);
      setTrackSearched(searchResults.filter(track =>
        !playlistTracks.some(item => item.id === track.id)));
    });
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
    console.log(trackSearched);
  };

  const removeTrack = (track) => {
    playlistTracks = savedTracks.filter((currentTrack) =>
      currentTrack.id !== track.id)
    //console.log(playlistTracks)
    setSavedTracks((prevTracks) =>
      prevTracks.filter((currentTrack) =>
        currentTrack.id !== track.id)
    );
    //realocating the trak on the search... right now misses one render to be updated with the 
    //console.log(searchResults)
    //console.log(savedTracks)
    setTrackSearched(searchResults.filter((track) =>
      !playlistTracks.some(item => item.id === track.id)));
    // searchResultsFiltered = searchResults.filter(track =>
    // !playlistTracks.some(item => item.id === track.id));
    // console.log(searchResultsFiltered);
    // setTrackSearched(searchResultsFiltered);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <SearchBar onSearch={search} />
      <main className="App-main">
        <SearchResults trackSearched={trackSearched} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          onNameChange={updatePlaylistName}
          savedTracks={savedTracks}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </main>
      <footer className="App-footer">
        <p>© 2023 Stacy Franco, All Rights Reserved </p>
        <p><a
          className="App-link"
          href="https://www.freepik.com/free-vector/abstract-music-background_1250515.htm#query=music%20background&position=43&from_view=search&track=ais"
        >Background image by Harryarts</a> on Freepik</p>
      </footer>
    </div>
  );
}

export default App;
