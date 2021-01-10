import logo from './img/logo.png';
import './App.css';
import MainPage from './sections/MainPage'


function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <div className="Container">
          <img src={logo} className="LogoHeader" alt="logo" />
          <div className="Menu">
            <ul>
              <li><a href="#">O que é Ryla</a></li>
              <li><a href="#">Distrito 4521</a></li>
              <li><a href="#">Programação</a></li>
              <li><a href="#">Palestrantes</a></li>
              <li><a href="#">Inscrições</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
        </div>
      </header>
      <MainPage/>
      <footer className="Footer">
          <p>Feito com <span className="Amor">♥</span> para o Distrito 4521</p>
      </footer>
    </div>
  );
}

export default App;
