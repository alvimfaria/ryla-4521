import logo from './img/logo.png';
import './App.css';
import MainPage from './sections/MainPage'
import AnchorLink from 'react-anchor-link-smooth-scroll'



function App() {


  return (
    <div className="App">
      <header className="AppHeader">
        <div className="Container">
          <img src={logo} className="LogoHeader" alt="logo" />
          <div className="Menu">
            <ul>
              <li><AnchorLink href='#ryla'>O que é Ryla</AnchorLink></li>
              <li><AnchorLink href='#prog'>Programação</AnchorLink></li>
              <li><AnchorLink href='#inscricao'>Inscrições</AnchorLink></li>
              <li><AnchorLink href='#contato'>Contato</AnchorLink></li>
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
