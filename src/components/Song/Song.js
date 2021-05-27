const Song = ({ song }) => {
  return (
    <div className="song-container">
      <img
        src={song.cover}
        alt={`Album cover for ${song.name} by ${song.artist}`}
      />
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
    </div>
  );
};

export default Song;
