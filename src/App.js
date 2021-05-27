import { useState } from "react";
import "./dist/css/App.min.css";
import Song from "./components/Song";
import Controls from "./components/Controls";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <Song song={currentSong} />
      <Controls
        song={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </>
  );
}

export default App;
