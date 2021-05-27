import { useRef } from "react";
import { Next, Pause, Play, Previous } from "grommet-icons";

const Controls = ({ song, setIsPlaying, isPlaying }) => {
  const audioRef = useRef(null);

  const nextSongHandler = () => {
    console.log("next");
  };
  const pauseSongHandler = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };
  const playSongHandler = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };
  const previousSongHandler = () => {
    console.log("previous");
  };
  return (
    <div className="controls-container">
      <div className="time-control">
        <p className="time-control__start">Start time</p>
        <input type="range" name="time-control" />
        <p className="time-control__end">End time</p>
      </div>
      <div className="play-control">
        <Previous onClick={previousSongHandler} />
        {isPlaying ? (
          <Pause onClick={pauseSongHandler} />
        ) : (
          <Play onClick={playSongHandler} />
        )}
        <Next onClick={nextSongHandler} />
      </div>
      <audio ref={audioRef} src={song.audio}></audio>
    </div>
  );
};

export default Controls;
