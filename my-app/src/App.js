//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import film from './images/film.jpg';

function App() {
  return (
    <div className="App">
      <header className="Glasgow Film festival">
      <img src={film} alt="film" width="400" />
        <h1>Glasgow Film Festival  - Coming to you March 2023</h1>
        <img src={film} alt="film" />
        <p>
         Come join us it will be fun
        </p>
  
      </header>
    </div>
  );
}

export default App;
