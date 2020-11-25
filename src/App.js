import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Generator UUID 4</h1>
        <p>Generate Your Universally Unique Identifier Number</p>
        {/* <button onClick={uuidv4}>GENERATE</button> */}
        <p>{uuidv4()}</p>
      </header>
    </div>
  );
}

export default App;
