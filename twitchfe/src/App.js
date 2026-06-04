import logo from "./logo.svg";
import "./App.css";

function Child(props) {
  console.log("props", props);
  return (
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Child propa="a" propb={1} />
      </header>
    </div>
  );
}

export default App;
