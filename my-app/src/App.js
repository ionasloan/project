//import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import "bootstrap/dist/css/bootstrap.css";
import film from './images/film.jpg';

function App() {
  return (
    <div className="App">
    <nav>
      {Nav}
    </nav>
   
      <header className="Glasgow Film festival">
        <h1>Glasgow Film Festival  - Coming to you March 2023</h1>
        <img src={film} alt="film" />
        <p>
         Come join us 
        </p>
  
      </header>
    </div>
  );
}

export default App;
