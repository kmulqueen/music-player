import "../../dist/css/controls.min.css";
import { Next, Pause, Play, Previous } from "grommet-icons";

const Controls = () => {
  return (
    <div className="controls-container">
      <div className="time-control">
        <p className="time-control__start">Start time</p>
        <input type="range" name="time-control" />
        <p className="time-control__end">End time</p>
      </div>
      <div className="play-control">
        <Previous />
        <Play />
        <Pause />
        <Next />
      </div>
    </div>
  );
};

export default Controls;
