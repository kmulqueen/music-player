import { useState } from "react";
import LibrarySongItem from "../LibrarySongItem";
import { Music } from "grommet-icons";

const Library = ({ songs, setCurrentSong, currentSong }) => {
  const [showLibrary, setShowLibrary] = useState(false);
  const toggleLibraryHandler = (e) => {
    e.stopPropagation();
    setShowLibrary(!showLibrary);
  };
  const songSelectHandler = (song) => {
    setCurrentSong(song);
  };
  return (
    <section className="library">
      <div
        onClick={toggleLibraryHandler}
        className={
          showLibrary
            ? "library__heading library__heading--active"
            : "library__heading library__heading--inactive"
        }
      >
        <h2>Library</h2>
        <Music />
      </div>
      <ul
        className={
          showLibrary ? "library__song-list" : "library__song-list-hidden"
        }
      >
        {songs.map((song, i) => (
          <LibrarySongItem
            song={song}
            key={`${song.name}-${i}`}
            songSelectHandler={songSelectHandler}
            currentSong={currentSong}
          />
        ))}
      </ul>
    </section>
  );
};

export default Library;
