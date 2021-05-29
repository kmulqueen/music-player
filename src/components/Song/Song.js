const Song = ({ song }) => {
  return (
    <section className="song-container">
      <img
        src={song.cover}
        alt={`Album cover for ${song.name} by ${song.artist}`}
      />
      <h2>{song.name}</h2>
      <h3>{song.artist}</h3>
    </section>
  );
};

export default Song;
