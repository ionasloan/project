import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import film from './images/film.jpg';

function App() {
  return (
    <div className="App">
      <header className="Glasgow Film festival - Coming to you March 2023">
      <img src={film} alt="film" width="400" />
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
