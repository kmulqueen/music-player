import "./dist/css/App.min.css";
import Song from "./components/Song";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <h1>Music Player App</h1>
      <Song />
      <Controls />
    </>
  );
}

export default App;
