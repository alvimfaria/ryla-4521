import './Banner.css';
import Img from '../../img/banner.jpg';

var bgImg = {
    backgroundImage: `url(${Img})`
  };
  

function App() {
  return (
    <div className="Banner" style={bgImg} >
      <h1>Bem-vindo ao Ryla<br/>Distrito 4521</h1>
    </div>
  );
}

export default App;
