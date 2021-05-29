const LibrarySongItem = ({ song }) => {
  console.log(song);
  return (
    <div className="song-item">
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
