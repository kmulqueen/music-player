import { useState } from "react";
import "./dist/css/App.min.css";
import Song from "./components/Song";
import Controls from "./components/Controls";
import Library from "./components/Library";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="app-container">
      <Library songs={songs} />
      <Song song={currentSong} />
      <Controls
        song={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
