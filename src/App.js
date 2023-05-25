import logo from './logo.svg';
import './App.css';
//import Track from './components/Track/Track';
//import Tracklist from './components/Tracklist/Tracklist';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        
        
      </header>
        <SearchBar />
      <main className="App-main">
        <SearchResults />
        <Playlist />
      </main>
      <footer className="App-footer">
        <p>copyright</p>
        <p><a
          className="App-link"
          href="https://www.freepik.com/free-vector/abstract-music-background_1250515.htm#query=music%20background&position=43&from_view=search&track=ais"
          >Image by Harryarts</a> on Freepik</p>
      </footer>
    </div>
  );
}

export default App;
