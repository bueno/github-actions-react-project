import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>CI/CD with GitHub Actions React App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https://docs.github.com/en/actions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GitHub Actions
        </a>
      </header>
    </div>
  );
}

export default App;
