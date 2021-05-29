import { useState } from "react";
import LibrarySongItem from "../LibrarySongItem";

const Library = ({ songs }) => {
  const [showLibrary, setShowLibrary] = useState(false);
  const toggleLibraryHandler = (e) => {
    e.stopPropagation();
    setShowLibrary(!showLibrary);
  };
  return (
    <section className="library">
      {/* <h2
        onClick={toggleLibraryHandler}
        className={
          showLibrary
            ? "library__heading library__heading--active"
            : "library__heading library__heading--inactive"
        }
      >
        Library
      </h2> */}
      <div
        onClick={toggleLibraryHandler}
        className={
          showLibrary
            ? "library__heading library__heading--active"
            : "library__heading library__heading--inactive"
        }
      >
        <h2>Library</h2>
      </div>
      <ul
        className={
          showLibrary ? "library__song-list" : "library__song-list-hidden"
        }
      >
        {songs.map((song, i) => (
          <LibrarySongItem song={song} key={`${song.name}-${i}`} />
        ))}
      </ul>
    </section>
  );
};

export default Library;
