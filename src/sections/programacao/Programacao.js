import Img from '../../img/construcao.png';

var bgImg = {
    backgroundImage: `url("https://rylaoceania.files.wordpress.com/2020/03/img_4574-1.jpg")`
  };
  

function Programacao() {
  return (
    <div className="Container2 Centralizar">
      <h1>Programação & Palestrantes</h1>
      <img src={Img} className="imgConstrucao"/>
      <h3>Em Breve</h3>
    </div>
  );
}

export default Programacao;
