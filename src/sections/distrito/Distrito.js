import Fluxo from "../../img/fluxo.PNG"
import Video from "../../img/video-conference.png"
function Distrito() {
  return (
    <div className="Distrito">
      <div className="Container2" >
          <h1>RYLA Distrital 4521</h1>
          <h2>RYLA: Desenvolvendo Projetos de Impacto</h2>
          <p>O RYLA Distrital 2021 vem com a proposta de reunir, de forma online, jovens líderes capazes de trocarem ideias sobre projetos que podem transformar as nossas comunidades. As vagas serão limitadas a dois jovens por
clube de Rotary e será cobrada uma taxa de inscrição, que será convertida em prêmio para execução dos projetos
destaques do evento. </p>
          <p>A temática escolhida para o RYLA do Distrito 4521 permite que os jovens desenvolvam habilidades importantes para o mercado de trabalho e também para suas vidas pessoais, além de possibilitarem aos Rotary Clubs acesso a
líderes capacitados, capazes de desenvolverem projetos de impacto na comunidade.</p>
          <img src={Fluxo} className="imgRyla" />
          <img src={Video} className="imgRyla" />
      </div>
    </div>
  );
}

export default Distrito;
