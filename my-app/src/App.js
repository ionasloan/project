import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import film from './images/film.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST</h1>
        <h2>TEST</h2>
        <img src={film} alt="film" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
