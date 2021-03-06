import { useEffect, useRef, useState } from "react";
import { Next, Pause, Play, Previous } from "grommet-icons";

const Controls = ({ song, songs, setIsPlaying, isPlaying, setCurrentSong }) => {
  const audioRef = useRef(null);
  const [songTime, setSongTime] = useState({
    currentTime: 0,
    duration: 0,
  });

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongTime({
      ...songTime,
      currentTime: e.target.value,
    });
  };
  const nextSongHandler = () => {
    const currentSongIndex = findCurrentSongIndex();
    if (currentSongIndex < songs.length - 1) {
      setCurrentSong(songs[currentSongIndex + 1]);
    } else {
      setCurrentSong(songs[0]);
    }
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
    const currentSongIndex = findCurrentSongIndex();
    if (currentSongIndex > 0) {
      setCurrentSong(songs[currentSongIndex - 1]);
    } else {
      setCurrentSong(songs[songs.length - 1]);
    }
  };
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration || 0;
    setSongTime({
      ...songTime,
      currentTime,
      duration,
    });
  };

  function findCurrentSongIndex() {
    const currentSongIndex = songs.findIndex(
      (element) => element.id === song.id
    );
    return currentSongIndex;
  }

  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    const secondsWithZero = String(seconds).padStart(2, "0");
    return `${minutes}:${secondsWithZero}`;
  }

  function formatRemainingTime(currentTime, duration) {
    const remainingTime = duration - currentTime;
    return `-${formatTime(remainingTime)}`;
  }

  useEffect(() => {
    let playPromise = audioRef.current[isPlaying ? "play" : "pause"]();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {});
    }
  }, [isPlaying, song]);

  return (
    <section className="controls-container">
      <div className="time-control">
        <p className="time-control__start">
          {formatTime(songTime.currentTime)}
        </p>
        <input
          type="range"
          name="time-control"
          min={0}
          max={songTime.duration}
          value={songTime.currentTime}
          onChange={dragHandler}
        />
        <p className="time-control__end">
          {formatRemainingTime(songTime.currentTime, songTime.duration)}
        </p>
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
      <audio
        ref={audioRef}
        src={song.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={nextSongHandler}
      ></audio>
    </section>
  );
};

export default Controls;
