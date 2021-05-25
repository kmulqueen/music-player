import "./dist/css/App.min.css";
import Song from "./components/Song";
import Controls from "./components/Controls";
import data from "./data";

function App() {
  return (
    <>
      <Song />
      <Controls />
    </>
  );
}

export default App;
