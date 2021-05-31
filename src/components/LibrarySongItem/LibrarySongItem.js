const LibrarySongItem = ({ song, songSelectHandler, currentSong }) => {
  const selectSong = (e) => {
    e.stopPropagation();
    songSelectHandler(song);
  };
  return (
    <div
      className={`song-item ${song.id === currentSong.id ? "selected" : ""}`}
      onClick={selectSong}
    >
      <img
        src={song.cover}
        alt={`Album cover for ${song.name} by ${song.artist}`}
        className="song-item__album"
      />
      <h3 className="song-item__title">{song.name}</h3>
      <p className="song-item__artist">{song.artist}</p>
    </div>
  );
};

export default LibrarySongItem;
